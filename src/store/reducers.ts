/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "@reduxjs/toolkit"
import { connectRouter } from "connected-react-router"

import { InjectedReducersType } from "utils/types/injector-typings"
import { history } from "utils/history"
import { globalReducer } from "app/slice"
import { BlockchainReducers } from "app/containers/Blockchain/slice"

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(injectedReducers: InjectedReducersType = {}) {
  // Initially we don't have any injectedReducers, so returning identity function to avoid the error
  if (Object.keys(injectedReducers).length === 0) {
    return (state) => state
  } else {
    return combineReducers({
      ...injectedReducers,
      router: connectRouter(history),
      global: globalReducer,
      blockchain: BlockchainReducers,
    })
  }
}
