import { DomainType } from "app/types"
import { z } from "zod"

export interface DomainProfileData {
  duration: number
  expiresAt: number
  id: number
  name: string
  ownerAddress: string
  primaryAddress: null
  sender: string
  timestamp: number
  txHash: string
  username?: string
  location?: string
  shortbio?: string
  website?: string
  avatar?: string
  telegram?: string
  discord?: string
  twitter?: string
  facebook?: string
  medium?: string
  walletEgld?: string
  walletEth?: string
  walletBtc?: string
  textRecords?: { key: string; value: string }[]
}

/* --- STATE --- */
export interface DomainProfileState {
  domainData: undefined | DomainType
  subdomains?: DomainType[]
  subdomainToRegister?: {
    name: string
    subdomainName?: string
  }
  subdomainToDelete?: { domain: string; subdomain: string }
  profilePropsToUpdate?: ProfilePropsToUpdate
  textRecordsToSet?: TextRecordToAdd[]

  socialAddressToAdd?: SocialAddressToAdd
  isLoading: boolean
  domainProfileData?: DomainProfileData
  walletAddressesToUpdate?: WalletAddressesToUpdate
  selectedPage: number
  subdomainSize: number
  subdomainTotalCount: number
}

export type ContainerState = DomainProfileState

export const ProfilePropsSchema = z.object({
  username: z.string().optional().nullish(),
  avatar: z.string().url().optional().nullish(),
  location: z.string().optional().nullish(),
  website: z.string().url().optional().nullish(),
  shortbio: z.string().optional().nullish(),
})

export type ProfilePropsToUpdate = z.infer<typeof ProfilePropsSchema>

export const TextRecordSchema = z.object({
  key: z.string(),
  value: z.string().url(),
})

export type TextRecordToAdd = z.infer<typeof TextRecordSchema>

export const SocialAddressSchema = z.object({
  name: z.string(),
  link: z.string().url(),
})

export type SocialAddressToAdd = z.infer<typeof SocialAddressSchema>

export const EditWalletsSchema = z.object({
  walletEgld: z.string().optional().nullish(),
  walletBtc: z.string().optional().nullish(),
  walletEth: z.string().optional().nullish(),
})

export type WalletAddressesToUpdate = z.infer<typeof EditWalletsSchema>
