import { createSelector } from "@reduxjs/toolkit"

import { RootState } from "types"
import { initialState } from "./slice"

export const DomainProfileDomains = {
  domainData: (state: RootState) => state.domainProfile?.domainData || initialState.domainData,
  subdomainToRegister: (state: RootState) =>
    state.domainProfile?.subdomainToRegister || initialState.subdomainToRegister,
  subdomainToDelete: (state: RootState) => state.domainProfile?.subdomainToDelete || initialState.subdomainToDelete,
  subdomains: (state: RootState) => state.domainProfile?.subdomains,
  isLoading: (state: RootState) => state.domainProfile?.isLoading,
  domainPropsToUpdate: (state: RootState) => state.domainProfile?.profilePropsToUpdate,
  textRecordToAdd: (state: RootState) => state.domainProfile?.textRecordsToSet,
  profileData: (state: RootState) => state.domainProfile?.domainProfileData,
  socialAddressToAdd: (state: RootState) => state.domainProfile?.socialAddressToAdd,
  walletAddressesToUpdate: (state: RootState) => state.domainProfile?.walletAddressesToUpdate,
  subdomainTotalCount: (state: RootState) => state.domainProfile?.subdomainTotalCount,
  subdomainSize: (state: RootState) => state.domainProfile?.subdomainSize,
  selectedPage: (state: RootState) => state.domainProfile?.selectedPage,
}

export const DomainProfileSelectors = {
  domainData: createSelector(DomainProfileDomains.domainData, (domainData) => domainData),
  subdomainToRegister: createSelector(DomainProfileDomains.subdomainToRegister, (subdomainData) => subdomainData),
  subdomains: createSelector(DomainProfileDomains.subdomains, (subdomains) => subdomains),
  isLoading: createSelector(DomainProfileDomains.isLoading, (data) => data),
  domainPropsToUpdate: createSelector(DomainProfileDomains.domainPropsToUpdate, (data) => data),
  textRecordToAdd: createSelector(DomainProfileDomains.textRecordToAdd, (data) => data),
  profileData: createSelector(DomainProfileDomains.profileData, (data) => data),
  socialAddressToAdd: createSelector(DomainProfileDomains.socialAddressToAdd, (data) => data),
  walletAddressesToUpdate: createSelector(DomainProfileDomains.walletAddressesToUpdate, (data) => data),
  selectedPage: createSelector(DomainProfileDomains.selectedPage, (page) => page),
  subdomainSize: createSelector(DomainProfileDomains.subdomainSize, (subdomainsSize) => subdomainsSize),
  subdomainTotalCount: createSelector(
    DomainProfileDomains.subdomainTotalCount,
    (subdomainsTotalCount) => subdomainsTotalCount,
  ),
}
