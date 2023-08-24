import { AccountType } from "@multiversx/sdk-dapp/types"
import { refreshAccount } from "@multiversx/sdk-dapp/utils"
import { BlockchainDomains } from "app/containers/Blockchain/selectors"
import { call, select } from "redux-saga/effects"
import { getDomain, getDomainNftId } from "./scUtils"

export type GetRequiredDataForTxCall = {
  account: AccountType
  chainId: string
  domain: any
  domain_nft_id: any
}

export function* getRequiredDataForTxCall(name: string) {
  yield call(refreshAccount)
  const account: AccountType = yield select(BlockchainDomains.connectedAccount)
  const chainId = yield select(BlockchainDomains.chainId)
  const { network } = yield select(BlockchainDomains.network)

  const domain = yield getDomain(name, network.apiAddress)
  const domain_nft_id = yield getDomainNftId(network.apiAddress)

  return {
    account,
    chainId,
    domain,
    domain_nft_id,
  }
}
