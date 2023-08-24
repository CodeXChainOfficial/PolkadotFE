import { useEffect } from "react"
import { Title } from "app/components/Typography"
import { useDispatch, useSelector } from "react-redux"
import { ManageDomainPageActions } from "../../slice"
import { StyledLoader, Wrapper } from "./style"
import { ActiveDomains } from "./components/ActiveDomains"
import { ManageDomainsPageSelectors } from "../../selectors"
import { paginateDomains } from "./utils"
import { BlockchainSelectors } from "app/containers/Blockchain/selectors"
import { useSearchParams } from "react-router-dom"
import { Box } from "@mui/material"
import { BPagination } from "app/components/BPagination"

export const ManageDomainRoot = () => {
  const dispatch = useDispatch()
  let [searchParams, setSearchParams] = useSearchParams()
  const page = useSelector(ManageDomainsPageSelectors.selectedPage) || 1
  const totalCount = useSelector(ManageDomainsPageSelectors.totalCount)
  const size = useSelector(ManageDomainsPageSelectors.size) || 10
  const userDomains = useSelector(ManageDomainsPageSelectors.domains)
  const txStatus = useSelector(BlockchainSelectors.xNamesTransactionStatus)
  const isLoading = useSelector(ManageDomainsPageSelectors.isLoadingDomains)

  useEffect(() => {
    dispatch(ManageDomainPageActions.getUserDomains())
    dispatch(ManageDomainPageActions.setSelectedPage(Number(searchParams.get("page"))))
    dispatch(ManageDomainPageActions.setSize(Number(searchParams.get("size"))))
    setSearchParams({ page: String(page), size: String(size) })
  }, [])

  useEffect(() => {
    dispatch(ManageDomainPageActions.setIsLoadingUserDomains(true))

    setTimeout(() => {
      dispatch(ManageDomainPageActions.getUserDomains())
    }, 1000)
  }, [txStatus.success])

  const paginatedDomains = paginateDomains(userDomains, page, size)

  function handleChangePagination(value: number) {
    dispatch(ManageDomainPageActions.setSelectedPage(value))
    setSearchParams({ page: String(value), size: String(size) })
  }

  return (
    <Wrapper>
      {isLoading && <StyledLoader />}
      <Title type={{ lg: "52r57.2", sm: "27r37.2" }} textAlign={{ lg: "start", sm: "center" }} mb="25px">
        Manage your domains
      </Title>
      <ActiveDomains domains={paginatedDomains} />

      <Box display="flex" justifyContent={"flex-end"} marginTop="20px">
        <BPagination totalCount={totalCount} pageSize={size} page={page} onChange={handleChangePagination} />
      </Box>
    </Wrapper>
  )
}
