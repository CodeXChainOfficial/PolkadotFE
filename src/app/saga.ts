import { replace } from "connected-react-router"
import { PayloadAction } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { call, put, select, takeLatest } from "redux-saga/effects"
import { apiService } from "services/api_service"
import { SessionStorageKeys, StandardResponse } from "services/constants"
import { cookieConfig, CookieKeys, cookies } from "services/cookie"
import { AppPages } from "./constants"
import { signInAPI } from "./providers/signInApi"
import { globalActions } from "./slice"
import { DomainType, GlobalState, WalletInfoDataType } from "./types"
import { getDomainDataAPI, getDomainsAPI, getFavoriteDomainsAPI, getUserAPI } from "./providers/globalApis"
import { sessionStorageService } from "utils/storage"
import { GlobalDomains } from "./selectors"
import { AccountType, SendTransactionReturnType } from "@multiversx/sdk-dapp/types"
import { BlockchainDomains } from "./containers/Blockchain/selectors"
import { sendTransaction } from "app/containers/Blockchain/utils"
import { refreshAccount } from "@multiversx/sdk-dapp/utils"
import { xNamesContract } from "./containers/Blockchain/contracts/xNames"
import { addNameSuffix, getToaster } from "utils/commonUtils"
import { multiply } from "precise-math"
import { Address, AddressValue, StringValue, TokenTransfer, U64Value, U8Value } from "@multiversx/sdk-core/out"
import { QueryParamsModel } from "./types"
import { WEGLD } from "./constant"
import { getDomain, getDomainNftId } from "utils/scUtils"
import { GetRequiredDataForTxCall, getRequiredDataForTxCall } from "utils/sagaUtils"

export function* SetIsLoggedIn(action: { type: string; payload: boolean }) {
  if (action.payload === false) {
    apiService.token = ""
    cookies.remove(CookieKeys.ACCESS_TOKEN, {
      path: cookieConfig().path,
      domain: cookieConfig().domain,
    })
    yield put(globalActions.setIsLoggedIn(false))
  } else {
    yield put(globalActions.getUserData())
    yield put(globalActions.getFavoriteDomains())
  }
}

export function* SignIn(action: { type: string; payload: string }) {
  yield put(globalActions.setIsLoadingSignIn(true))
  try {
    const response: StandardResponse = yield call(signInAPI, {
      wallet_address: action.payload,
    })
    if (response.is_success && !response.data.token) {
      toast.error(`invalid credentials`)
    }

    if (response.is_success && response.data.token) {
      const token = response.data.token
      cookies.set(CookieKeys.ACCESS_TOKEN, token, cookieConfig())
      yield put(globalActions.setIsLoggedIn(true))
      if (sessionStorageService.read(SessionStorageKeys.REDIRECT_ACTION)) {
        yield put(replace(sessionStorageService.read(SessionStorageKeys.REDIRECT_ACTION)))
      }
      yield put(globalActions.getUserData())
      yield put(globalActions.getFavoriteDomains())
      toast.success("Wallet connected successfully")
    }
    if (!response.is_success) {
      toast.error(response.message)
    }
  } catch (err) {
    console.warn("Login failed: ", err)
  } finally {
    yield put(globalActions.setIsLoadingSignIn(false))
  }
}

export function* LogOut() {
  yield put(globalActions.setUserData(undefined))
  yield put(globalActions.setWalletInfoData(undefined))
  apiService.token = ""
  yield put(replace(AppPages.RootPage))
  cookies.remove(CookieKeys.ACCESS_TOKEN, {
    path: cookieConfig().path,
    domain: cookieConfig().domain,
  })
  cookies.remove(CookieKeys.WalletAddress, {
    path: cookieConfig().path,
    domain: cookieConfig().domain,
  })
  sessionStorageService.remove(SessionStorageKeys.REDIRECT_ACTION)
  toast.success("Wallet disconnected")
}

function* SetWalletInfoData(action: PayloadAction<WalletInfoDataType>) {}

export function* getUserData() {
  yield put(globalActions.setIsLoadingUserData(true))
  try {
    const response: StandardResponse = yield call(getUserAPI)

    if (response.is_success) {
      yield put(globalActions.setUserData(response.data))
    }
    if (!response.is_success) {
      toast.error(response.message)
    }
  } catch (err) {
    console.warn("Getting user data failed: ", err)
  } finally {
    yield put(globalActions.setIsLoadingUserData(false))
  }
}

export function* getFavoriteDomains() {
  yield put(globalActions.setIsLoadingFavoriteDomains(true))
  try {
    const response: StandardResponse = yield call(getFavoriteDomainsAPI)

    if (response.is_success) {
      yield put(globalActions.setFavoriteDomains(response.data))
    }
  } catch (err) {
    toast.warn("Getting favorite list of domains failed")
  } finally {
    yield put(globalActions.setIsLoadingFavoriteDomains(false))
  }
}

function* getDomainData(action: PayloadAction<string>) {
  yield put(globalActions.setIsLoading(true))
  const name = action.payload
  const domainData = yield call(getDomainDataAPI, addNameSuffix(name))
  yield put(globalActions.setDomainData(domainData))
  yield put(globalActions.setIsLoading(false))
}

function* getDomains(action: PayloadAction<QueryParamsModel>) {
  yield put(globalActions.setIsLoading(true))
  const domains = yield call(getDomainsAPI, action.payload)
  yield put(globalActions.setIsLoading(false))
  yield put(globalActions.setTotalCount(domains.totalCount))
  yield put(globalActions.setDomains(domains.data))
  yield put(globalActions.setIsLoading(false))
}

function* startDomainRegisteration() {
  const toaster = getToaster()

  try {
    toaster.loading()

    const domainToRegister: DomainType = yield select(GlobalDomains.domainData)
    const name = domainToRegister.name
    const domainInPopup: GlobalState["domainToRegister"] = yield select(GlobalDomains.domainToRegister)

    const giftRecipientAddress = domainInPopup?.giftRecipientAddress

    yield call(refreshAccount)
    const account: AccountType = yield select(BlockchainDomains.connectedAccount)

    const recipientAddress = giftRecipientAddress ? giftRecipientAddress : account.address

    const duration = yield select(GlobalDomains.domainRegisterDuration)

    const chainId = yield select(BlockchainDomains.chainId)

    const priceToPay = multiply(domainToRegister.priceEgld, duration, 10e-18)

    let transaction = domainInPopup?.extending
      ? yield getDomainExtensionTx({ name, priceToPay, duration })
      : xNamesContract.methodsExplicit
          .register_domain([new StringValue(name), new U64Value(duration), new U8Value(4)])
          .withGasLimit(60_000_000)
          .withChainID(chainId)
          .withNonce(account.nonce)
          .withSingleESDTTransfer(TokenTransfer.fungibleFromAmount(WEGLD, priceToPay, 18))
          .withSender(new Address(recipientAddress))
          .buildTransaction()

    let displayInfo = {
      successMessage: "Successful",
      processingMessage: "Processing...",
      errorMessage: "An error occured. Please try again later.",
    }

    const res: SendTransactionReturnType = yield call(sendTransaction, {
      transactions: transaction as any,
      displayInfo,
    })
    yield put(globalActions.setDomainToRegister(undefined))
    toaster.dismiss()
  } catch (error: any) {
    toaster.errorLog(error)
  }
}

function* getDomainExtensionTx({ name, priceToPay, duration }: { name: string; priceToPay: number; duration: number }) {
  const { account, chainId, domain, domain_nft_id }: GetRequiredDataForTxCall = yield getRequiredDataForTxCall(name)

  return xNamesContract.methodsExplicit
    .extend_domain([new StringValue(name), new U64Value(duration), new U8Value(4)])
    .withSender(new Address(account.address))
    .withMultiESDTNFTTransfer([
      TokenTransfer.fungibleFromAmount(WEGLD, priceToPay, 18),
      TokenTransfer.nonFungible(domain_nft_id, domain.nft_nonce),
    ])
    .withGasLimit(60_000_000)
    .withChainID(chainId)
    .withNonce(account.nonce)
    .buildTransaction()
}

function* startDomainPrimarySet(action: ReturnType<typeof globalActions.setDomainToPrimary>) {
  const toaster = getToaster()
  try {
    toaster.loading()

    const { name: domainName }: DomainType = yield select(GlobalDomains.domainData)
    yield call(refreshAccount)
    const account: AccountType = yield select(BlockchainDomains.connectedAccount)
    const chainId = yield select(BlockchainDomains.chainId)
    const { network } = yield select(BlockchainDomains.network)

    const domain = yield getDomain(domainName, network.apiAddress)
    const domain_nft_id = yield getDomainNftId(network.apiAddress)

    const transaction: any = xNamesContract.methodsExplicit
      .update_primary_address([new StringValue(domainName)])
      .withSender(new Address(account.address))
      .withSingleESDTNFTTransfer(TokenTransfer.nonFungible(domain_nft_id, domain.nft_nonce))
      .withGasLimit(50_000_000)
      .withChainID(chainId)
      .withNonce(account.nonce)
      .buildTransaction()

    let displayInfo = {
      successMessage: "Successful",
      processingMessage: "Processing...",
      errorMessage: "An error has occurred during primary name setting",
    }

    const res: SendTransactionReturnType = yield call(sendTransaction, {
      transactions: transaction,
      displayInfo,
    })
    yield put(globalActions.setDomainToPrimary(undefined))
    toaster.dismiss()
  } catch (error: any) {
    toaster.errorLog(error)
  }
}

function* startDomainTransfer() {
  const toaster = getToaster()
  try {
    toaster.loading()

    const domainToTransferDetails = yield select(GlobalDomains.domainToTransferOwnership)
    yield call(refreshAccount)
    const domainName = domainToTransferDetails.name
    const account: AccountType = yield select(BlockchainDomains.connectedAccount)
    const recipientAddress = domainToTransferDetails.newOwnerAddress
    const chainId = yield select(BlockchainDomains.chainId)
    const { network } = yield select(BlockchainDomains.network)

    const domain = yield getDomain(domainName, network.apiAddress)
    const domain_nft_id = yield getDomainNftId(network.apiAddress)

    let transaction = xNamesContract.methodsExplicit
      .transfer_domain([new StringValue(domainName), new AddressValue(new Address(recipientAddress))])
      .withSender(new Address(account.address))
      .withSingleESDTNFTTransfer(TokenTransfer.nonFungible(domain_nft_id, domain.nft_nonce))
      .withGasLimit(60_000_000)
      .withChainID(chainId)
      .withNonce(account.nonce)
      .buildTransaction()

    let displayInfo = {
      successMessage: "name transferred successfully",
      processingMessage: "Transferring name",
      errorMessage: "An error has occurred during name transfer",
    }
    const res: SendTransactionReturnType = yield call(sendTransaction, {
      transactions: transaction as any,
      displayInfo,
    })
    yield put(globalActions.setDomainToTransferOwnership(undefined))
    toaster.dismiss()
  } catch (error: any) {
    toaster.errorLog(error)
  }
}

export function* globalSaga() {
  yield takeLatest(globalActions.setIsLoggedIn.type, SetIsLoggedIn)
  yield takeLatest(globalActions.signIn.type, SignIn)
  yield takeLatest(globalActions.logOut.type, LogOut)
  yield takeLatest(globalActions.setWalletInfoData.type, SetWalletInfoData)
  yield takeLatest(globalActions.getUserData.type, getUserData)
  yield takeLatest(globalActions.getDomains.type, getDomains)
  yield takeLatest(globalActions.getDomainData.type, getDomainData)
  yield takeLatest(globalActions.startDomainRegisteration.type, startDomainRegisteration)
  yield takeLatest(globalActions.startDomainPrimarySet.type, startDomainPrimarySet)
  yield takeLatest(globalActions.startDomainTransfer.type, startDomainTransfer)
}
