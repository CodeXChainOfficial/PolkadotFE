import { createSelector } from "@reduxjs/toolkit"

import { RootState } from "types"

const ManageDomainsPageDomains = {
  root: (state: RootState) => state?.manageDomainPage,
  domains: (state: RootState) => state?.manageDomainPage?.domains,
  selectedPage: (state: RootState) => state?.manageDomainPage?.selectedPage || 1,
  totalCount: (state: RootState) => state?.manageDomainPage?.totalCount || 0,
  isLoadingDomains: (state: RootState) => state?.manageDomainPage?.isLoadingDomains,
  size: (state: RootState) => state?.manageDomainPage?.size,
}

export const ManageDomainsPageSelectors = {
  domains: createSelector(ManageDomainsPageDomains.domains, (domains) => domains),
  selectedPage: createSelector(ManageDomainsPageDomains.selectedPage, (selectedPage) => selectedPage),
  totalCount: createSelector(ManageDomainsPageDomains.totalCount, (totalCount) => totalCount),
  isLoadingDomains: createSelector(ManageDomainsPageDomains.isLoadingDomains, (isLoadingDomains) => isLoadingDomains),
  size: createSelector(ManageDomainsPageDomains.size, (size) => size),
}
