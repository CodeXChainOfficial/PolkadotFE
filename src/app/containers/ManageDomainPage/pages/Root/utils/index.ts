import { DomainsType } from "app/types"

export const paginateDomains = (array: DomainsType = [], page: number, pageSize: number) => {
  const startIndex = (page - 1) * pageSize
  return array.slice(startIndex, pageSize * page)
}
