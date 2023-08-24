import { PageableParams } from "app/constants"
import { DomainType, QueryParamsModel } from "app/types"
import { apiService } from "services/api_service"
import { RequestTypes } from "services/constants"

export const getSiteKeyAPI = () => {
  return apiService.fetchData({
    url: "config/recaptcha",
    requestType: RequestTypes.GET,
  })
}

export const getUserAPI = () => {
  return apiService.fetchData({
    url: "user/current",
    requestType: RequestTypes.GET,
  })
}

export const checkDomainApi = (name: string) => {
  return apiService.fetchData({
    url: `domain_name/check/${name.toLowerCase()}`,
    requestType: RequestTypes.GET,
  })
}

export const domainLikeAPI = (domainName: string) => {
  return apiService.fetchData({
    data: { domain_names: [domainName] },
    url: `favorite/domain/toggle`,
    requestType: RequestTypes.POST,
  })
}

export const getFavoriteDomainsAPI = () => {
  return apiService.fetchData({
    url: `favorite/domain/my`,
    requestType: RequestTypes.GET,
  })
}

export const getDomainDataAPI = (name: string) => {
  return apiService.fetchData({
    url: `domains/${name}`,
    requestType: RequestTypes.GET,
  }) as Promise<DomainType>
}

export const getDomainsAPI = ({ page = PageableParams.page, size = PageableParams.size }: QueryParamsModel) => {
  return apiService.fetchData({
    url: `domains?page=${page}&size=${size}`,
    requestType: RequestTypes.GET,
  })
}

export const getSubdomainsApi = ({
  page = PageableParams.page,
  size = PageableParams.size,
  name,
}: QueryParamsModel & { name: string }) => {
  return apiService.fetchData({
    url: `domain/${name}/subdomain?page=${page}&size=${size}`,
    requestType: RequestTypes.GET,
  })
}
