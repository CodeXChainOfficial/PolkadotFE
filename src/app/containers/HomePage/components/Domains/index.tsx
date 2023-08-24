import { CardsWrapper, NumberBlock, NumbersBlockWrapper, Top, Wrapper } from "./style"
import { XCard } from "app/components/XCard"
import { Text, Title } from "app/components/Typography"
import { CssVariables } from "styles/glob-styles"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { globalActions } from "app/slice"
import { GlobalSelectors } from "app/selectors"
import { GridLoading } from "app/components/grid_loading/gridLoading"
import { Box } from "@mui/material"
import { BPagination } from "app/components/BPagination"
import { useSearchParams } from "react-router-dom"

export const DomainsSection = () => {
  const dispatch = useDispatch()
  let [searchParams, setSearchParams] = useSearchParams()

  const queryPage = Number(searchParams.get("page"))
  const querySize = Number(searchParams.get("size"))

  const domains = useSelector(GlobalSelectors.domains)
  const page = useSelector(GlobalSelectors.selectedPage)
  const isLoadingDomains = useSelector(GlobalSelectors.isLoading)
  const size = useSelector(GlobalSelectors.domainsSize)
  const totalCount = useSelector(GlobalSelectors.totalCount)

  useEffect(() => {
    dispatch(globalActions.setSelectedPage(queryPage))
    dispatch(globalActions.setDomainsSize(querySize))
    dispatch(globalActions.getDomains({ page: queryPage, size: querySize }))
  }, [])

  function handleChangePagination(value: number) {
    dispatch(globalActions.setSelectedPage(value))
    dispatch(globalActions.getDomains({ page: value, size }))
    setSearchParams({ page: String(value), size: String(size) })
  }

  return (
    <Wrapper>
      <Top>
        <Title
          type={{ lg: "32s34", md: "20s22" }}
          content="Select and claim an Identity that works for you and your brands."
          maxWidth="530px"
        />

        <NumbersBlockWrapper>
          <NumberBlock>
            <Text type={{ lg: "14s16" }} content="Names claimed" maxWidth="530px" color={CssVariables.Neutral400} />
            <Text type={{ lg: "32r36", md: "20s22" }} content="3,567" maxWidth="530px" color={CssVariables.Green4} />
          </NumberBlock>

          <NumberBlock>
            <Text
              type={{ lg: "14s16" }}
              content="Premium domains available"
              maxWidth="530px"
              color={CssVariables.Neutral400}
            />
            <Text type={{ lg: "32r36", md: "20s22" }} content="67,088" maxWidth="530px" color={CssVariables.Green4} />
          </NumberBlock>
        </NumbersBlockWrapper>
      </Top>
      {isLoadingDomains ? (
        <GridLoading />
      ) : (
        <CardsWrapper>{domains?.map((card, idx) => <XCard key={idx} {...card} hasPrice />)}</CardsWrapper>
      )}
      <Box display="flex" justifyContent={"flex-end"} marginTop="20px">
        <BPagination totalCount={totalCount} pageSize={size} page={page} onChange={handleChangePagination} />
      </Box>
    </Wrapper>
  )
}
