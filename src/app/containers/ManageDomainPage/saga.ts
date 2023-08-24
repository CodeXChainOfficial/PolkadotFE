// import { take, call, put, select, takeLatest } from 'redux-saga/effects';
// import { actions } from './slice';

import { AccountType } from "@multiversx/sdk-dapp/types/account.types"
import { all, call, put, select, takeLatest } from "redux-saga/effects"
import { BlockchainDomains } from "../Blockchain/selectors"
import { getMyDomainsApi } from "./providers"
import { ManageDomainPageActions } from "./slice"

export function* getUserDomains() {
  const account: AccountType = yield select(BlockchainDomains.connectedAccount)

  try {
    yield put(ManageDomainPageActions.setIsLoadingUserDomains(true))

    const response = yield call(getMyDomainsApi, account.address)

    yield put(ManageDomainPageActions.setUserDomains(response.data))
    yield put(ManageDomainPageActions.setTotalCount(response.totalCount))
  } catch (error) {
    yield all([put(ManageDomainPageActions.setUserDomainsError("something went wrong, please try again later"))])
  } finally {
    yield put(ManageDomainPageActions.setIsLoadingUserDomains(false))
  }
}

export function* manageDomainPageSaga() {
  yield takeLatest(ManageDomainPageActions.getUserDomains.type, getUserDomains)
}
