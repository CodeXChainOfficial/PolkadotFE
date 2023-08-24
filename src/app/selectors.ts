import { createSelector } from "@reduxjs/toolkit"

import { RootState } from "types"

export const GlobalDomains = {
  root: (state: RootState) => state?.global,
  router: (state: RootState) => state?.router || {},
  loggedIn: (state: RootState) => state?.global?.loggedIn || false,
  isWalletConnectionModalOpen: (state: RootState) => state?.global?.globalModals?.isWalletConnectionModalOpen || false,
  domainData: (state: RootState) => state?.global?.domainData,
  domainToRegister: (state: RootState) => state?.global?.domainToRegister,
  domainRegisterDuration: (state: RootState) => state?.global?.domainRegisterDuration || 1,
  domainToPrimary: (state: RootState) => state?.global?.domainToPrimary,
  domains: (state: RootState) => state?.global?.domains,
  domainToTransferOwnership: (state: RootState) => state?.global?.domainToTransfer,

  selectedPage: (state: RootState) => state?.global?.selectedPage || 1,
  totalCount: (state: RootState) => state?.global?.totalCount || 0,
  isLoading: (state: RootState) => state?.global?.isLoading,
  domainsSize: (state: RootState) => state?.global?.domainsSize || 10,
}

export const GlobalSelectors = {
  router: createSelector(GlobalDomains.router, (state) => state),
  root: createSelector(GlobalDomains.root, (state) => state),
  loggedIn: createSelector(GlobalDomains.loggedIn, (isLoggedIn) => isLoggedIn),
  isWalletConnectionModalOpen: createSelector(GlobalDomains.isWalletConnectionModalOpen, (isOpen) => isOpen),
  domainData: createSelector(GlobalDomains.domainData, (domainData) => domainData),
  domaintoRegister: createSelector(GlobalDomains.domainToRegister, (domaintoRegister) => domaintoRegister),

  registerDuration: createSelector(GlobalDomains.domainRegisterDuration, (domainData) => domainData),
  domainToPrimary: createSelector(GlobalDomains.domainToPrimary, (domainToPrimary) => domainToPrimary),
  domains: createSelector(GlobalDomains.domains, (domains) => domains),
  domainToTransferOwnership: createSelector(GlobalDomains.domainToTransferOwnership, (data) => data),
  selectedPage: createSelector(GlobalDomains.selectedPage, (selectedPage) => selectedPage),
  totalCount: createSelector(GlobalDomains.totalCount, (totalCount) => totalCount),
  isLoading: createSelector(GlobalDomains.isLoading, (isLoadingDomains) => isLoadingDomains),
  domainsSize: createSelector(GlobalDomains.domainsSize, (domainsSize) => domainsSize),
}
