import { Helmet } from "react-helmet-async"
import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"
import { Title } from "app/components/Typography"
import { ActionContent } from "./components/ActionContent"
import { media } from "styles/media"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GridLoading } from "app/components/grid_loading/gridLoading"
import { BlockchainSelectors } from "app/containers/Blockchain/selectors"
import { globalActions } from "app/slice"
import { GlobalSelectors } from "app/selectors"
import { getAddressText } from "./utils/getAddressText"
import WhyClaimDomainNameComponent from "./components/WhyClaimDomainNameComponent"
import { Tutorial } from "app/components/Tutorial"

export function Domain() {
  const dispatch = useDispatch()
  const { name } = useParams<{ name: string }>()
  const domainData = useSelector(GlobalSelectors.domainData)
  const account = useSelector(BlockchainSelectors.connectedAccount)
  const accountAddress = account?.address
  const txStatus = useSelector(BlockchainSelectors.xNamesTransactionStatus)

  useEffect(() => {
    if (name) dispatch(globalActions.getDomainData(name))

    return () => {
      dispatch(globalActions.setDomainData(undefined))
    }
  }, [name])

  useEffect(() => {
    if (txStatus.success)
      setTimeout(() => {
        if (name) dispatch(globalActions.getDomainData(name))
      }, 1000)
  }, [txStatus?.success])

  if (!domainData) return <GridLoading />
  const { isAvailable, ownerAddress } = domainData

  const isYours = !!ownerAddress && !!accountAddress && ownerAddress === accountAddress

  let content = getAddressText(domainData.name, isAvailable, isYours)

  return (
    <>
      <Helmet>
        <title>register {domainData.name}</title>
        <meta name="description" content="Description of SearchPage" />
      </Helmet>

      <Wrapper data-cy="domains-register-section">
        <Title
          type={{ lg: "52m57.2", sm: "40r40" }}
          content={content.title}
          color={content.color}
          textAlign="left"
          data-cy="title"
        />
        <Title
          type={{ lg: "52m57.2", sm: "40r40" }}
          content={content.subTitle}
          color={CssVariables.Neutral600}
          textAlign="left"
          maxWidth="930px"
          mb={{ lg: "120px", sm: "50px" }}
        />
        <ActionContent
          {...{
            isAvailable: isAvailable,
            isOwner: isYours,
          }}
        />
      </Wrapper>
      <Tutorial />
      <WhyClaimDomainNameComponent />
    </>
  )
}

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  padding: 40px;
  background-color: ${CssVariables.Black2};
  min-height: 600px;

  ${media.md} {
    min-height: unset;
  }

  ${media.sm} {
    gap: 10px;
    height: auto;
    padding: 20px 10px;
    border-radius: 0;
  }
`
