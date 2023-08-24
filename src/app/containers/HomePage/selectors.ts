import { createSelector } from "@reduxjs/toolkit"

import { RootState } from "types"
import { initialState } from "./slice"

export const HomePageDomains = {
  root: (state: RootState) => state?.homePage,
  searchedDomain: (state: RootState) => state.homePage?.searchedDomain || initialState.searchedDomain,
  searchValue: (state: RootState) => state.homePage?.searchValue || initialState.searchValue,
  searchText: (state: RootState) => state.homePage?.searchText || initialState.searchText,
  filterValue: (state: RootState) => state.homePage?.filterValue || initialState.filterValue,
  errorValue: (state: RootState) => state.homePage?.errorValue || initialState.errorValue,
  helperText: (state: RootState) => state.homePage?.helperText || initialState.helperText,
}

export const HomePageSelectors = {
  searchValue: createSelector(HomePageDomains.searchValue, (text) => text),
  searchedDomain: createSelector(HomePageDomains.searchedDomain, (domain) => domain),
  searchText: createSelector(HomePageDomains.searchText, (text) => text),
  filterValue: createSelector(HomePageDomains.filterValue, (filterValue) => filterValue),
  errorValue: createSelector(HomePageDomains.errorValue, (errorValue) => errorValue),
  helperText: createSelector(HomePageDomains.helperText, (text) => text),
}
