import { PayloadAction } from "@reduxjs/toolkit"
import { notSupportedCharacters } from "app/constants"
import { DomainType } from "app/types"
import { createSlice } from "utils/@reduxjs/toolkit"
import { byteSize } from "utils/commonUtils"
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors"
import { homePageSaga } from "./saga"
import { ContainerState, DomainsOptionsType } from "./types"

// The initial state of the HomePage container
export const initialState: ContainerState = {
  searchedDomain: undefined,
  searchValue: "",
  searchText: "",
  filterValue: "Ongoing auctions",
  errorValue: false,
  helperText: "",
}

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    search(state, action: PayloadAction<string>) {},
    setSearchedDomain(state, action: PayloadAction<DomainType | undefined>) {
      state.searchedDomain = action.payload
    },
    setSearchValue(state, action: PayloadAction<string>) {
      const domainName: string = action.payload?.toLowerCase()

      const isRightDomainName = notSupportedCharacters.some((char) => domainName.includes(char))

      if (isRightDomainName) {
        state.errorValue = true
        state.helperText = `Special characters such as (${notSupportedCharacters.join(
          ", ",
        )}) and spaces are not supported.`
      } else {
        const domainByteSize = byteSize(domainName)

        if (domainByteSize > 64) {
          state.helperText = "Domain name too long. Domain characters exceed max size of 64bytes."
          state.errorValue = true
          state.searchValue = ""
        } else {
          state.errorValue = false
          state.searchValue = domainName
        }
        state.searchText = domainName
      }
    },
    setFilterValue(state, action: PayloadAction<DomainsOptionsType>) {
      state.filterValue = action.payload
    },
  },
})

export const { actions: HomePageActions, reducer: HomePageReducer, name: sliceKey } = homePageSlice

export const useHomePageSlice = () => {
  useInjectReducer({ key: sliceKey, reducer: HomePageReducer })
  useInjectSaga({ key: sliceKey, saga: homePageSaga })

  return { homePageSlice }
}
