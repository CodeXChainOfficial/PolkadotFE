import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "utils/@reduxjs/toolkit"
import { ContainerState } from "./types"
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors"

import { domainProfileSaga } from "./saga"
import { DomainType } from "app/types"

// The initial state of the DomainProfile container
export const initialState: ContainerState = {
  domainData: undefined,
  isLoading: false,
  selectedPage: 1,
  subdomainSize: 10,
  subdomainTotalCount: 0,
}

const domainProfileSlice = createSlice({
  name: "domainProfile",
  initialState,
  reducers: {
    getDomainData(_, action: PayloadAction<string>) {},
    setDomainData(state, action: PayloadAction<DomainType | undefined>) {
      state.domainData = action.payload
    },
    setProfilePropsToUpdate(state, action: PayloadAction<ContainerState["profilePropsToUpdate"]>) {
      state.profilePropsToUpdate = action.payload
    },
    getDomainProfileData(_, action: PayloadAction<string>) {},

    setDomainProfileData(state, action: PayloadAction<ContainerState["domainProfileData"]>) {
      state.domainProfileData = action.payload
    },
    startProfileUpdate(
      _,
      action: PayloadAction<{
        data: ContainerState["profilePropsToUpdate"]
        domainName: string
      }>,
    ) {},
    setWalletAddressesToUpdate(state, action: PayloadAction<ContainerState["walletAddressesToUpdate"]>) {
      state.walletAddressesToUpdate = action.payload
    },
    startWalletAddressUpdate(
      _,
      action: PayloadAction<{
        data: ContainerState["walletAddressesToUpdate"]
        domainName: string
      }>,
    ) {},
    setTextRecordToAdd(state, action: PayloadAction<ContainerState["textRecordsToSet"]>) {
      state.textRecordsToSet = action.payload
    },
    setTextRecords(_, action: PayloadAction<ContainerState["textRecordsToSet"]>) {},
    setSocialAddressToAdd(state, action: PayloadAction<ContainerState["socialAddressToAdd"]>) {
      state.socialAddressToAdd = action.payload
    },
    addSocialAddress(_, action: PayloadAction<ContainerState["socialAddressToAdd"]>) {},
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    setSubdomainToRegister(state, action: PayloadAction<ContainerState["subdomainToRegister"]>) {
      state.subdomainToRegister = action.payload
    },
    getSubdomains(_, action: PayloadAction<{ name: string; size: number; page: number }>) {},
    setSubdomains(state, action: PayloadAction<DomainType[] | undefined>) {
      state.subdomains = action.payload
    },
    startSubdomainRegisteration() {},
    startSubdomainDeletion(state, action: PayloadAction<ContainerState["subdomainToDelete"]>) {
      state.subdomainToDelete = action.payload
    },
    setSelectedPage(state, action: PayloadAction<number>) {
      state.selectedPage = action.payload
    },
    setSubdomainSize(state, action: PayloadAction<number>) {
      state.subdomainSize = action.payload
    },
    setSubdomainTotalCount(state, action: PayloadAction<number>) {
      state.subdomainTotalCount = action.payload
    },
  },
})

export const { actions: DomainProfileActions, reducer: DomainProfileReducer, name: sliceKey } = domainProfileSlice

export const useDomainProfileSlice = () => {
  useInjectReducer({ key: sliceKey, reducer: DomainProfileReducer })
  useInjectSaga({ key: sliceKey, saga: domainProfileSaga })

  return { DomainProfileActions }
}
