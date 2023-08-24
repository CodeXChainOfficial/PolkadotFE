import { useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom"
import { push, replace } from "connected-react-router"
import queryString, { ParseOptions } from "query-string"
import { removeEmptyKeys } from "utils/commonUtils"
import { useDidMountEffect } from "hooks/useDidMountEffect"

/**
 * This function returns a tuple of three values. The first value is the query params from the current
 * location.
 * The second value is a function that takes in a new query params object and updates the current
 * location with the new query params.
 * The third value is a function that clears the query params from the current location
 * @param {T} initialValues - The initial values of the query params.
 * @returns The first return value is the locationSearch object. The second return value is a function
 * that takes in a params object and updates the locationSearch object. The third return value is a
 * function that clears the locationSearch object.
 */

const queryStringSetting: ParseOptions = {
  arrayFormat: "bracket",
  arrayFormatSeparator: "|",
}

export const useQueryParams = <T = any>(initialValues?: T): [T, Function, Function] => {
  const location = useLocation()

  const [locationSearch, setLocationSearch] = useState<T | any>({
    ...initialValues,
    ...queryString.parse(location.search, queryStringSetting),
  })
  const dispatch = useDispatch()

  useDidMountEffect(() => {
    const prevSearch = queryString.parse(location.search, queryStringSetting)
    // if (!isEmpty(prevSearch)) {
    setLocationSearch({ ...initialValues, ...prevSearch })
    // }
  }, [location.search])

  const queryParamsUpdater = (params: { [key: string]: string | number }): void => {
    const prevSearch = queryString.parse(location.search, queryStringSetting)
    const queries: any = removeEmptyKeys({ ...prevSearch, ...params })
    const stringified = queryString.stringify(queries, queryStringSetting)
    setLocationSearch(queries)

    dispatch(
      push({
        search: `?${stringified}`,
      }),
    )
  }

  const clearQueryParam = () => {
    dispatch(replace({ search: "" }))
    setLocationSearch({})
  }

  return [locationSearch, queryParamsUpdater, clearQueryParam]
}

export default useQueryParams
