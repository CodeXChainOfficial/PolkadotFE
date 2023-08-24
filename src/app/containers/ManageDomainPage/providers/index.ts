import { apiService } from "services/api_service"
import { RequestTypes } from "services/constants"

export const getMyDomainsApi = (address: string) => {
  return apiService.fetchData({
    url: `accounts/${address}`,
    requestType: RequestTypes.GET,
  })
}
