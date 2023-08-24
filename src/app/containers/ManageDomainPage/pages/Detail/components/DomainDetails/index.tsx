import moment from "moment"
import { Title } from "app/components/Typography"
import { Desc, Label, Row, Section, SectionInfo, XNameCardWrapper } from "./style"
import { XNameCard } from "app/components/XNameCard"
import { Box } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { BlockchainSelectors } from "app/containers/Blockchain/selectors"
import { useEffect } from "react"
import { globalActions } from "app/slice"
import { useParams } from "react-router-dom"
import { GlobalSelectors } from "app/selectors"
import { GridLoading } from "app/components/grid_loading/gridLoading"
import { ExtendAction } from "../../actions/Extend"
import { MakePrimaryAction } from "../../actions/MakePrimary"
import { formatLocaleDate, strShortener } from "utils/commonUtils"
import { AppPages } from "app/constants"
import { useRedirectNotOwnerHook } from "hooks/useRedirectNotOwnerHook"
import { getExpirationTime } from "utils/getExpirationTime"
import { getPriceToPay } from "utils/domainUtils"
import { LoadingGrid } from "app/components/grid_loading/componentLoading"

export const DomainDetails = () => {
  const dispatch = useDispatch()
  const { name } = useParams<{ name: string }>()
  const txStatus = useSelector(BlockchainSelectors.xNamesTransactionStatus)
  const domainData = useSelector(GlobalSelectors.domainData)
  const isLoading = useSelector(GlobalSelectors.isLoading)

  useRedirectNotOwnerHook({
    ownerAddress: domainData?.ownerAddress,
    redirectRoute: `${AppPages.DomainProfile}/${name}`,
  })

  useEffect(() => {
    if (name) dispatch(globalActions.getDomainData(name))

    return () => {
      dispatch(globalActions.setDomainData(undefined))
    }
  }, [name])

  useEffect(() => {
    dispatch(globalActions.setIsLoading(true))

    if (!name || !txStatus.success) return

    setTimeout(() => {
      dispatch(globalActions.getDomainData(name))
    }, 1000)
  }, [txStatus.success])

  if (!domainData) {
    return <GridLoading />
  }

  const { timeLeft } = getExpirationTime(domainData.expiresAt)
  const prices = getPriceToPay(domainData)

  return (
    <>
      {isLoading && <LoadingGrid />}

      <Title type={{ lg: "52r57", sm: "28r32" }}>{domainData?.name}</Title>
      <Section>
        <SectionInfo>
          <Row>
            <Label>Name:</Label>
            <Desc>{domainData?.name}</Desc>
          </Row>
          <Row>
            <Label>Domain Owner: </Label>
            <Desc>{strShortener(domainData?.ownerAddress, 10)}</Desc>
          </Row>
          <Row>
            <Label>Domain Sender: </Label>
            <Desc>{strShortener(domainData?.sender, 10)}</Desc>
          </Row>
          <Row>
            <Label>Domain Price: </Label>
            <Desc>
              <Box>
                {prices.wegldPrice} WEGLD <span>~${prices.usdPrice}</span>
              </Box>
            </Desc>
          </Row>
          <Row>
            <Label>First registered: </Label>
            <Desc>
              <Box>
                {formatLocaleDate(domainData?.timestamp * 1000)}{" "}
                <span>&#8594; {moment(domainData?.timestamp * 1000).fromNow()}</span>
              </Box>
            </Desc>
          </Row>
          <Row>
            <Label>Expires in:</Label>
            <Desc>
              <Box>
                {formatLocaleDate(domainData?.expiresAt * 1000)}{" "}
                <span>
                  &#8594;{" in "}
                  {timeLeft}
                </span>
              </Box>
              <Box display="flex" alignItems="center" flexWrap="wrap" gap="20px">
                <ExtendAction />
                <MakePrimaryAction />
              </Box>
            </Desc>
          </Row>
        </SectionInfo>
        <XNameCardWrapper>
          <XNameCard {...domainData} />
        </XNameCardWrapper>
      </Section>
    </>
  )
}
