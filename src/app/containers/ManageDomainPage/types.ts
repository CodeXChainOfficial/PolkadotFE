import { DomainsType } from "app/types"

/* --- STATE --- */
export interface ManageDomainPageState {
  domains: DomainsType
  selectedPage: number
  totalCount: number
  size: number
  isLoadingDomains: boolean
  error: string
}

export type ContainerState = ManageDomainPageState
