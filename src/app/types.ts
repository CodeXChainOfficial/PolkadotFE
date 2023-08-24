import { Dispatch } from "@reduxjs/toolkit"

export interface GlobalState {
  domainToRegister?: {
    name: string
    gift?: boolean
    giftRecipientAddress?: string
    extending?: boolean
    expiresAt?: number
    timestamp?: number
    priceEgld: number
    priceUsd: number
    duration?: number
  }
  domainToPrimary?: {
    name: string
    address?: string
  }
  domainToTransfer?: {
    name: string
    newOwnerAddress?: string
  }
  domains?: undefined | DomainType[]
  selectedPage: number
  totalCount: number
  domainsSize: number
  isLoading: boolean
  domainRegisterDuration: number
  loggedIn: boolean
  isLoadingSignIn: boolean
  executeRecaptcha: any
  globalModals: {
    isWalletConnectionModalOpen: boolean
    isOpenConnectWalletQR: boolean
    isOpenUserWallet: boolean
    isOpenDisconnectWallet: boolean
    isOpenAlert: boolean
    isOpenCreateSubdomain: boolean
    isOpenConfirmSubdomain: boolean
    isOpenSetRecord: boolean
    isOpenSubmittedAlert: boolean
    isOpenFailedAlert: boolean
    isOpenSellAlert: boolean
  }
  qrCodeWalletConnectorData: QrCodeWalletConnectorDataType
  walletInfoData: WalletInfoDataType
  afterWalletConnection: any
  tx_hash: undefined | string
  user: UserDataType | undefined
  isLoadingUserData: boolean
  favoriteDomains: undefined | string[]
  isLoadingFavoriteDomains: boolean
  domainData: undefined | DomainType
  dispatch: Dispatch<any> | undefined
}
export interface OpenWalletConnectionModel {
  open: boolean
  afterConnection?: any
}

// Wallet types

export type QrCodeWalletConnectorDataType = WalletResponse | undefined

export interface WalletResponse {
  connect_string: string
}

export type WalletInfoDataType = Array<WalletAccountInfo> | undefined

export interface WalletAccountInfo {
  address: string
  balance: number
}

export interface TransferMessage {
  data: {
    action: any
    tx_hash: string
    tx_status: TxStatus
  }
  message_type: TransferMessageTypes
  network_id: string
  originator: string
  user_status: string
}

export enum TransferMessageTypes {
  SimpleTransferResponse = "SimpleTransferResponse",
}

export enum TxStatus {
  Accepted = "Accepted",
  Rejected = "Rejected",
}

export interface SignInModel {
  wallet_address: string
}

export interface DomainType {
  isAvailable: boolean
  name: string
  priceEgld: number
  priceUsd: number
  ownerAddress?: string
  expiresAt: number
  createdAt: number
  primaryAddress: string | null
  isOwner?: boolean
  sender: string
  // domain registered date
  timestamp: number
  duration?: number
}

export interface SubDomainType {
  id: number
  name: string
  registrant: string
  resolver: null | string
  expiration_date: string
  owner: string
  editor: string
  parent: string
}

export type DomainsType = Array<DomainType> | undefined

export type SubDomainsType = Array<DomainType> | undefined

export interface PageableInterface {
  page?: number
  size?: number
}

// current user data

export interface UserDataType {
  id: number
  wallet_address: string
  is_blocked: boolean
  avatar_url: null
  username: string | null
  twitter_acc: string | null
  created_at: string
  is_hide_dmns_for_other: boolean
  email: string
  lined_in_email?: string
  lined_in_firstname?: string
  lined_in_image?: string
  lined_in_lastname?: string
}

export interface QueryParamsModel {
  page?: number
  size?: number
}
