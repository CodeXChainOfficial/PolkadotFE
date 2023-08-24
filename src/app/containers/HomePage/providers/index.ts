import { apiService } from "services/api_service"
import { RequestTypes } from "services/constants"

export const getDomainsApi = () => {
  return apiService.fetchData({
    url: "",
    requestType: RequestTypes.GET,
  })
}
