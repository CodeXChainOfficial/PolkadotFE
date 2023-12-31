import { PayloadAction } from "@reduxjs/toolkit"
import { cookieConfig, CookieKeys, cookies } from "services/cookie"
import { createSlice } from "utils/@reduxjs/toolkit"
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors"
import { globalSaga } from "./saga"
import {
  DomainType,
  GlobalState,
  OpenWalletConnectionModel,
  QrCodeWalletConnectorDataType,
  QueryParamsModel,
  UserDataType,
  WalletInfoDataType,
} from "./types"

// The initial state of the LoginPage container
export const initialState: GlobalState = {
  loggedIn: false,
  isLoadingSignIn: false,
  executeRecaptcha: undefined,
  globalModals: {
    isWalletConnectionModalOpen: false,
    isOpenConnectWalletQR: false,
    isOpenUserWallet: false,
    isOpenDisconnectWallet: false,
    isOpenAlert: false,
    isOpenCreateSubdomain: false,
    isOpenConfirmSubdomain: false,
    isOpenSetRecord: false,
    isOpenSubmittedAlert: false,
    isOpenFailedAlert: false,
    isOpenSellAlert: false,
  },
  qrCodeWalletConnectorData: undefined,
  walletInfoData: undefined,
  afterWalletConnection: undefined,
  tx_hash: undefined,
  user: undefined,
  isLoadingUserData: false,
  dispatch: undefined,
  favoriteDomains: undefined,
  isLoadingFavoriteDomains: false,
  // global register data
  domainData: undefined,
  domainRegisterDuration: 1,
  // domains
  domains: undefined,
  selectedPage: 1,
  totalCount: 0,
  domainsSize: 10,
  isLoading: false,
}

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.loggedIn = action.payload
    },
    setExecuteRecaptcha(state, action: PayloadAction<any>) {
      state.executeRecaptcha = action.payload
    },
    setIsWalletConnectModalOpen(state, action: PayloadAction<OpenWalletConnectionModel>) {
      state.globalModals.isWalletConnectionModalOpen = action.payload.open
      if (action.payload.open) {
        state.afterWalletConnection = action.payload.afterConnection
      }
    },
    setAfterWalletConnection(state, action: PayloadAction<any>) {
      state.afterWalletConnection = action.payload
    },
    clearTheAfterWalletConnectionAction(state, action: PayloadAction<void>) {
      state.afterWalletConnection = undefined
    },
    setIsOpenConnectWalletQR(state, action: PayloadAction<boolean>) {
      state.globalModals.isOpenConnectWalletQR = action.payload
    },
    setIsOpenUserWallet(state, action: PayloadAction<boolean>) {
      state.globalModals.isOpenUserWallet = action.payload
    },
    setIsOpenDisconnectWallet(state, action: PayloadAction<boolean>) {
      state.globalModals.isOpenDisconnectWallet = action.payload
    },
    setIsOpenAlert(state, action: PayloadAction<boolean>) {
      state.globalModals.isOpenAlert = action.payload
    },
    setIsOpenCreateSubdomain(state, action: PayloadAction<boolean>) {
      state.globalModals.isOpenCreateSubdomain = action.payload
    },
    setIsOpenConfirmSubdomain(state, action: PayloadAction<boolean>) {
      state.globalModals.isOpenConfirmSubdomain = action.payload
    },
    setIsOpenSetRecord(state, action: PayloadAction<boolean>) {
      state.globalModals.isOpenSetRecord = action.payload
    },
    setQrCodeWalletConnectorData(state, action: PayloadAction<QrCodeWalletConnectorDataType>) {
      state.qrCodeWalletConnectorData = action.payload
    },
    setWalletInfoData(state, action: PayloadAction<WalletInfoDataType>) {
      state.walletInfoData = action.payload
      cookies.remove(CookieKeys.WalletAddress, {
        path: cookieConfig().path,
        domain: cookieConfig().domain,
      })
      if (action.payload && action.payload[0].address) {
        cookies.set(CookieKeys.WalletAddress, action.payload[0].address, cookieConfig())
      } else if (action.payload === undefined) {
        cookies.remove(CookieKeys.WalletAddress, {
          path: cookieConfig().path,
          domain: cookieConfig().domain,
        })
      }
    },
    signIn(state, action: PayloadAction<any>) {},
    setIsLoadingSignIn(state, action: PayloadAction<boolean>) {
      state.isLoadingSignIn = action.payload
    },
    logOut(state, action: PayloadAction<undefined>) {
      state.loggedIn = false
    },
    getUserData(state, action: PayloadAction<undefined>) {},
    setUserData(state, action: PayloadAction<UserDataType | undefined>) {
      state.user = action.payload
    },
    setIsLoadingUserData(state, action: PayloadAction<boolean>) {
      state.isLoadingUserData = action.payload
    },
    setDispatch(state, action: PayloadAction<any>) {
      state.dispatch = action.payload
    },
    setIsOpenSellAlert(state, action: PayloadAction<boolean>) {
      state.globalModals.isOpenSellAlert = action.payload
    },
    setIsLoadingFavoriteDomains(state, action: PayloadAction<boolean>) {
      state.isLoadingFavoriteDomains = action.payload
    },
    getFavoriteDomains() {},
    setFavoriteDomains(state, action: PayloadAction<string[]>) {
      state.favoriteDomains = action.payload
    },
    // global actions for xNames
    getDomains(_, action: PayloadAction<QueryParamsModel>) {},
    setDomains(state, action: PayloadAction<DomainType[] | []>) {
      state.domains = action.payload
    },
    getDomainData(_, action: PayloadAction<string>) {},
    setDomainData(state, action: PayloadAction<DomainType | undefined>) {
      state.domainData = action.payload
    },
    setDomainToRegister(state, action: PayloadAction<GlobalState["domainToRegister"]>) {
      state.domainToRegister = action.payload
    },
    startDomainRegisteration() {},

    updateregisterDuration(state, action: PayloadAction<number>) {
      state.domainRegisterDuration = action.payload
    },
    setDomainToPrimary(state, action: PayloadAction<GlobalState["domainToPrimary"]>) {
      state.domainToPrimary = action.payload
    },
    startDomainPrimarySet() {},
    setDomainToTransferOwnership(state, action: PayloadAction<GlobalState["domainToTransfer"]>) {
      state.domainToTransfer = action.payload
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    setSelectedPage(state, action: PayloadAction<number>) {
      state.selectedPage = action.payload
    },
    setTotalCount(state, action: PayloadAction<number>) {
      state.totalCount = action.payload
    },
    setDomainsSize(state, action: PayloadAction<number>) {
      state.domainsSize = action.payload
    },
    startDomainTransfer() {},
  },
})

export const { actions: globalActions, reducer: globalReducer, name: sliceKey } = globalSlice

export const useGlobalSlice = () => {
  useInjectReducer({ key: sliceKey, reducer: globalReducer })
  useInjectSaga({ key: sliceKey, saga: globalSaga })

  return { globalActions }
}
