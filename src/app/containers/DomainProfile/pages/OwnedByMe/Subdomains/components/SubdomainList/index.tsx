import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useQueryParams from "hooks/useQueryParams"
import { useDispatch, useSelector } from "react-redux"
import { Box } from "@mui/material"
import { addNameSuffix } from "utils/commonUtils"
import { BPagination } from "app/components/BPagination"
import { Typography } from "app/components/Typography"
import { SubdomainBar } from "../SubdomainBar"
import { CardGroup, EmptyList } from "./style"
import { DomainProfileSelectors } from "app/containers/DomainProfile/selectors"
import { GridLoading } from "app/components/grid_loading/gridLoading"
import { DomainProfileActions } from "app/containers/DomainProfile/slice"
import { BlockchainSelectors } from "app/containers/Blockchain/selectors"

export const SubdomainList = () => {
  const dispatch = useDispatch()
  const { name } = useParams<{ name: string }>()
  const [queryParams, setQueryParams] = useQueryParams<{
    page: string
    size: string
  }>()
  const subdomains = useSelector(DomainProfileSelectors.subdomains)
  const txStatus = useSelector(BlockchainSelectors.xNamesTransactionStatus)

  const page = useSelector(DomainProfileSelectors.selectedPage) || 1
  const totalCount = useSelector(DomainProfileSelectors.subdomainTotalCount) || 0
  const size = useSelector(DomainProfileSelectors.subdomainSize) || 10

  useEffect(() => {
    dispatch(DomainProfileActions.setSelectedPage(Number(queryParams.page)))
    dispatch(DomainProfileActions.setSubdomainSize(Number(queryParams.size)))
    dispatch(
      DomainProfileActions.getSubdomains({
        page,
        size,
        name: addNameSuffix(name),
      }),
    )

    return () => {
      dispatch(DomainProfileActions.setSubdomains(undefined))
    }
  }, [])

  useEffect(() => {
    if (txStatus.success)
      setTimeout(() => {
        dispatch(
          DomainProfileActions.getSubdomains({
            page,
            size,
            name: addNameSuffix(name),
          }),
        )
      }, 2000)
  }, [txStatus?.success])

  useEffect(() => {
    dispatch(
      DomainProfileActions.getSubdomains({
        page,
        size,
        name: addNameSuffix(name),
      }),
    )
  }, [page, size])

  function handleChangePagination(value: number) {
    dispatch(DomainProfileActions.setSelectedPage(value))
    setQueryParams({ page: value, size })
  }

  if (!subdomains) {
    return <GridLoading />
  }

  if (subdomains.length === 0) {
    return (
      <EmptyList>
        <Typography type="20m20" content="You don't have any subdomain yet." />
      </EmptyList>
    )
  }

  return (
    <CardGroup>
      {subdomains.map((subdomain, idx) => (
        <SubdomainBar key={`${subdomain.name}_${idx}`} {...subdomain} />
      ))}

      <Box display="flex" justifyContent={"flex-end"} marginTop="20px">
        <BPagination totalCount={totalCount} pageSize={size} page={page} onChange={handleChangePagination} />
      </Box>
    </CardGroup>
  )
}
