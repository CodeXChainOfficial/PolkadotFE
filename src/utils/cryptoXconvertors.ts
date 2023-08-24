export type DurationType = 1 | 2 | 3

export interface SerializeDomainType {
  duration: DurationType
  domain: string
  address: string
}

export interface SerializeTransferDomainType {
  to: string
  domain: string
  amount: number
  from: string
}
