import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "utils/@reduxjs/toolkit"
import { ContainerState } from "./types"
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors"

import { manageDomainPageSaga } from "./saga"
import { DomainType } from "app/types"

// The initial state of the ManageDomainPage container
export const initialState: ContainerState = {
  isLoadingDomains: false,
  selectedPage: 1,
  totalCount: 0,
  size: 10,
  error: "",
  domains: [],
}

const manageDomainPageSlice = createSlice({
  name: "manageDomainPage",
  initialState,
  reducers: {
    getUserDomains(state) {
      state.error = ""
    },
    setUserDomainsError(state, action: PayloadAction<string>) {
      state.error = action.payload
      state.domains = []
    },
    setUserDomains(state, action: PayloadAction<DomainType[] | undefined>) {
      state.domains = action.payload
    },
    setIsLoadingUserDomains(state, action: PayloadAction<boolean>) {
      state.isLoadingDomains = action.payload
    },
    setSelectedPage(state, action: PayloadAction<number>) {
      state.selectedPage = action.payload
    },
    setTotalCount(state, action: PayloadAction<number>) {
      state.totalCount = action.payload
    },
    setSize(state, action: PayloadAction<number>) {
      state.size = action.payload
    },
  },
})

export const {
  actions: ManageDomainPageActions,
  reducer: ManageDomainPageReducer,
  name: sliceKey,
} = manageDomainPageSlice

export const useManageDomainPageSlice = () => {
  useInjectReducer({ key: sliceKey, reducer: ManageDomainPageReducer })
  useInjectSaga({ key: sliceKey, saga: manageDomainPageSaga })
  return { ManageDomainPageActions }
}
