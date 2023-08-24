import { apiService } from "services/api_service"
import { RequestTypes } from "services/constants"

export const updateProfileAPI = ({ name, data }: { data: any; name: string }) => {
  return apiService.fetchData({
    requestType: RequestTypes.POST,
    data,
    url: `domains/${name}/profile`,
  })
}

export const getDomainProfileAPI = ({ name }: { name: string }) => {
  return apiService.fetchData({
    requestType: RequestTypes.GET,
    url: `domains/${name}/profile`,
  })
}
