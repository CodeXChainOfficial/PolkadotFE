import { call, put, select, takeLatest } from "redux-saga/effects"
import { PayloadAction } from "@reduxjs/toolkit"
import { getDomainDataAPI, getSubdomainsApi } from "app/providers/globalApis"
import { addNameSuffix, getToaster } from "utils/commonUtils"
import { DomainProfileActions } from "./slice"
import { DomainProfileDomains, DomainProfileSelectors } from "./selectors"
import { DomainProfileData, DomainProfileState } from "./types"
import { AccountType, SendTransactionReturnType } from "@multiversx/sdk-dapp/types"
import { BlockchainDomains } from "app/containers/Blockchain/selectors"
import { sendTransaction } from "app/containers/Blockchain/utils"
import { refreshAccount } from "@multiversx/sdk-dapp/utils"
import { xNamesContract } from "app/containers/Blockchain/contracts/xNames"
import {
  Address,
  AddressValue,
  CompositeType,
  CompositeValue,
  StringType,
  StringValue,
  TokenIdentifierValue,
  TokenTransfer,
  VariadicType,
  VariadicValue,
} from "@multiversx/sdk-core/out"
import { getDomainProfileAPI } from "./providers/updateProfile"
import { WEGLD } from "app/constant"
import { getDomain, getDomainNftId, getEgldPrice, textRecordType } from "utils/scUtils"
import { DomainType } from "app/types"
import { GetRequiredDataForTxCall, getRequiredDataForTxCall } from "utils/sagaUtils"

function* getDomainData(action: PayloadAction<string>) {
  const name = action.payload
  const domainData = yield call(getDomainDataAPI, addNameSuffix(name))
  yield put(DomainProfileActions.setDomainData(domainData))
}

function* getSubdomains(action: PayloadAction<{ name: string; size: number; page: number }>) {
  yield put(DomainProfileActions.setSubdomains(undefined))

  const domainData = yield call(getSubdomainsApi, action.payload)

  yield put(DomainProfileActions.setSubdomains(domainData.data))
  yield put(DomainProfileActions.setSubdomainTotalCount(domainData.totalCount))
}

function* startSubdomainRegisteration() {
  const toaster = getToaster()
  try {
    toaster.loading()

    const subdomainInPopup: DomainProfileState["subdomainToRegister"] = yield select(
      DomainProfileDomains.subdomainToRegister,
    )

    const { network } = yield select(BlockchainDomains.network)

    if (!subdomainInPopup) throw new Error("There's no subdomain in popup.")

    const domain = yield getDomain(subdomainInPopup.name, network.apiAddress)
    const domain_nft_id = yield getDomainNftId(network.apiAddress)

    const fullName = `${subdomainInPopup.subdomainName}.${subdomainInPopup.name}`

    // temp solution, get egld equivalent to 2.5$ from API when it is ready
    const priceToPay = 0.000_000_000_1
    // const priceToPay = yield getEgldPrice(network.apiAddress) // Use this after getEgldPrice is fixed.

    yield call(refreshAccount)
    const account: AccountType = yield select(BlockchainDomains.connectedAccount)
    const recipientAddress = account.address

    const chainId = yield select(BlockchainDomains.chainId)

    let transaction = xNamesContract.methodsExplicit
      .register_sub_domain([new StringValue(fullName), new AddressValue(new Address(recipientAddress))])
      .withSender(new Address(recipientAddress))
      .withMultiESDTNFTTransfer([
        TokenTransfer.fungibleFromAmount(WEGLD, priceToPay, 18),
        TokenTransfer.nonFungible(domain_nft_id, domain.nft_nonce),
      ])
      .withGasLimit(60_000_000)
      .withChainID(chainId)
      .buildTransaction()

    let displayInfo = {
      successMessage: "sub name is Successfully registered",
      processingMessage: "Registering sub name",
      errorMessage: "An error has occurred during sub name registration",
    }

    const res: SendTransactionReturnType = yield call(sendTransaction, {
      transactions: transaction as any,
      displayInfo,
    })
    yield put(DomainProfileActions.setSubdomainToRegister(undefined))
  } catch (error: any) {
    toaster.errorLog(error)
  } finally {
    toaster.dismiss()
  }
}

function* startSubdomainDeletion() {
  const toaster = getToaster()
  try {
    toaster.loading()

    const data: DomainProfileState["subdomainToDelete"] = yield select(DomainProfileDomains.subdomainToDelete)

    if (!data) throw new Error("Please provide the subdomain to delete")

    const { account, chainId, domain, domain_nft_id }: GetRequiredDataForTxCall = yield call(
      getRequiredDataForTxCall,
      data.domain,
    )

    // console.log(new TokenIdentifierValue(WEGLD).toString())

    let transaction: any = xNamesContract.methodsExplicit
      .remove_sub_domain([new StringValue(data.subdomain)])
      .withSender(new Address(account.address))
      .withMultiESDTNFTTransfer([
        TokenTransfer.fungibleFromAmount(WEGLD, 0.000_000_000_1, 18),
        TokenTransfer.nonFungible(domain_nft_id, domain.nft_nonce),
      ])
      .withGasLimit(50_000_000)
      .withChainID(chainId)
      .buildTransaction()

    let displayInfo = {
      successMessage: "Successful.",
      processingMessage: "Processing...",
      errorMessage: "An error has occurred.",
    }

    const res: SendTransactionReturnType = yield call(sendTransaction, {
      transactions: transaction,
      displayInfo,
    })

    toaster.dismiss()
  } catch (error) {
    toaster.errorLog(error)
  }
}

function* startProfileUpdate(action: ReturnType<typeof DomainProfileActions.startProfileUpdate>) {
  const toaster = getToaster()

  try {
    yield put(DomainProfileActions.setIsLoading(true))
    const data = action.payload.data ?? {}
    const { name }: DomainType = yield select(DomainProfileSelectors.domainData)

    const { account, chainId, domain, domain_nft_id }: GetRequiredDataForTxCall = yield call(
      getRequiredDataForTxCall,
      name,
    )

    const compositeType = new CompositeType(
      new StringType(),
      new StringType(),
      new StringType(),
      new StringType(),
      new StringType(),
    )
    let transaction = xNamesContract.methodsExplicit
      .update_domain_overview([
        new StringValue(name),
        new CompositeValue(compositeType, [
          new StringValue(data.username || ""),
          new StringValue(data.avatar || ""),
          new StringValue(data.location || ""),
          new StringValue(data.website || ""),
          new StringValue(data.shortbio || ""),
        ]),
      ])
      .withSender(new Address(account.address))
      .withSingleESDTNFTTransfer(TokenTransfer.nonFungible(domain_nft_id, domain.nft_nonce))
      .withGasLimit(50_000_000)
      .withChainID(chainId)
      .buildTransaction()

    let displayInfo = {
      successMessage: "Successful",
      processingMessage: "Updating profile info.",
      errorMessage: "An error occured.",
    }

    const res: SendTransactionReturnType = yield call(sendTransaction, {
      transactions: transaction as any,
      displayInfo,
    })

    yield put(DomainProfileActions.setProfilePropsToUpdate(undefined))
  } catch (error) {
    toaster.errorLog(error)
  } finally {
    yield put(DomainProfileActions.setIsLoading(false))
  }
}

function* setTextRecords(action: ReturnType<typeof DomainProfileActions.setTextRecords>) {
  const toaster = getToaster()

  try {
    yield put(DomainProfileActions.setIsLoading(true))

    if (!action.payload) throw new Error("Provide text records to set.")

    const { name }: DomainType = yield select(DomainProfileSelectors.domainData)

    const { account, chainId, domain, domain_nft_id }: GetRequiredDataForTxCall = yield call(
      getRequiredDataForTxCall,
      name,
    )

    let variadicType = new VariadicType(textRecordType)

    let transaction = xNamesContract.methodsExplicit
      .update_domain_textrecord([
        new StringValue(name),
        new VariadicValue(
          variadicType,
          action.payload.map((txtRec) => new StringValue(`${txtRec.key}@${txtRec.value}`)),
        ),
      ])
      .withSender(new Address(account.address))
      .withSingleESDTNFTTransfer(TokenTransfer.nonFungible(domain_nft_id, domain.nft_nonce))
      .withGasLimit(50_000_000)
      .withChainID(chainId)
      .buildTransaction()

    let displayInfo = {
      successMessage: "Successful",
      processingMessage: "Processing...",
      errorMessage: "An error occured.",
    }

    const res: SendTransactionReturnType = yield call(sendTransaction, {
      transactions: transaction as any,
      displayInfo,
    })

    yield put(DomainProfileActions.setTextRecordToAdd(undefined))
  } catch (error) {
    toaster.errorLog(error)
  } finally {
    yield put(DomainProfileActions.setIsLoading(false))
  }
}

function* addSocialAddress(action: ReturnType<typeof DomainProfileActions.addSocialAddress>) {
  const toaster = getToaster()

  try {
    yield put(DomainProfileActions.setIsLoading(true))

    const { name }: DomainType = yield select(DomainProfileSelectors.domainData)

    const data: DomainProfileData = yield select(DomainProfileSelectors.profileData)

    const profileData = { ...data }

    if (!action.payload) {
      throw Error("Provide a social media and the link to update.")
    }

    profileData[action.payload.name] = action.payload.link

    const { account, chainId, domain, domain_nft_id }: GetRequiredDataForTxCall = yield call(
      getRequiredDataForTxCall,
      name,
    )

    const compositeType = new CompositeType(
      new StringType(),
      new StringType(),
      new StringType(),
      new StringType(),
      new StringType(),
      new StringType(),
    )

    let transaction = xNamesContract.methodsExplicit
      .update_domain_socials([
        new StringValue(name),
        new CompositeValue(compositeType, [
          new StringValue(profileData.telegram || ""),
          new StringValue(profileData.discord || ""),
          new StringValue(profileData.twitter || ""),
          new StringValue(profileData.medium || ""),
          new StringValue(profileData.facebook || ""),
          new StringValue(""), // for other_link
        ]),
      ])
      .withSender(new Address(account.address))
      .withSingleESDTNFTTransfer(TokenTransfer.nonFungible(domain_nft_id, domain.nft_nonce))
      .withGasLimit(50_000_000)
      .withChainID(chainId)
      .buildTransaction()

    let displayInfo = {
      successMessage: "Successful.",
      processingMessage: "Processing...",
      errorMessage: "An error occured.",
    }

    const res: SendTransactionReturnType = yield call(sendTransaction, {
      transactions: transaction as any,
      displayInfo,
    })

    yield put(DomainProfileActions.setSocialAddressToAdd(undefined))
  } catch (error) {
    toaster.errorLog(error)
  } finally {
    yield put(DomainProfileActions.setIsLoading(false))
  }
}

function* startWalletAddressUpdate(action: ReturnType<typeof DomainProfileActions.startWalletAddressUpdate>) {
  const toaster = getToaster()

  try {
    yield put(DomainProfileActions.setIsLoading(true))

    const { name }: DomainType = yield select(DomainProfileSelectors.domainData)

    if (!action.payload) throw Error("Provide wallet address(es) to update.")

    const { account, chainId, domain, domain_nft_id }: GetRequiredDataForTxCall = yield call(
      getRequiredDataForTxCall,
      name,
    )

    const compositeType = new CompositeType(new StringType(), new StringType(), new StringType())

    let transaction = xNamesContract.methodsExplicit
      .update_domain_wallets([
        new StringValue(name),
        new CompositeValue(compositeType, [
          new StringValue(action.payload.data?.walletEgld || ""),
          new StringValue(action.payload.data?.walletBtc || ""),
          new StringValue(action.payload.data?.walletEth || ""),
        ]),
      ])
      .withSender(new Address(account.address))
      .withSingleESDTNFTTransfer(TokenTransfer.nonFungible(domain_nft_id, domain.nft_nonce))
      .withGasLimit(50_000_000)
      .withChainID(chainId)
      .buildTransaction()

    let displayInfo = {
      successMessage: "Successful.",
      processingMessage: "Processing...",
      errorMessage: "An error occured.",
    }

    const res: SendTransactionReturnType = yield call(sendTransaction, {
      transactions: transaction as any,
      displayInfo,
    })

    yield put(DomainProfileActions.setWalletAddressesToUpdate(undefined))
  } catch (error) {
    toaster.errorLog(error)
  } finally {
    yield put(DomainProfileActions.setIsLoading(false))
  }
}

function* getDomainProfileData(action: ReturnType<typeof DomainProfileActions.getDomainProfileData>) {
  yield put(DomainProfileActions.setIsLoading(true))
  const name = action.payload
  try {
    const domainData = yield call(getDomainProfileAPI, {
      name: addNameSuffix(name),
    })
    yield put(DomainProfileActions.setDomainProfileData(domainData))
  } catch (error) {
    console.error(error)
  } finally {
    yield put(DomainProfileActions.setIsLoading(false))
  }
}

export function* domainProfileSaga() {
  yield takeLatest(DomainProfileActions.getDomainData.type, getDomainData)
  yield takeLatest(DomainProfileActions.getSubdomains.type, getSubdomains)
  yield takeLatest(DomainProfileActions.startSubdomainRegisteration.type, startSubdomainRegisteration)
  yield takeLatest(DomainProfileActions.startSubdomainDeletion.type, startSubdomainDeletion)
  yield takeLatest(DomainProfileActions.startProfileUpdate.type, startProfileUpdate)
  yield takeLatest(DomainProfileActions.setTextRecords.type, setTextRecords)
  yield takeLatest(DomainProfileActions.addSocialAddress.type, addSocialAddress)
  yield takeLatest(DomainProfileActions.getDomainProfileData.type, getDomainProfileData)
  yield takeLatest(DomainProfileActions.startWalletAddressUpdate.type, startWalletAddressUpdate)
}
