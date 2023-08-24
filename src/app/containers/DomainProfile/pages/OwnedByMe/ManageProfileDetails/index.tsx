import { Title } from "app/components/Typography"
import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"
import { SideBar } from "./components/SideBar"
import { useEffect, useState } from "react"
import { EmptyContent } from "../components/EmptyContent"
import { media } from "styles/media"
import { EditProfileModal } from "./components/EditProfileModal"
import { AddTextRecordModal } from "./components/AddTextRecordModal"
import { AddSocialAddressModal } from "./components/AddSocialAddressModal"
import { useDispatch, useSelector } from "react-redux"
import { DomainProfileActions } from "app/containers/DomainProfile/slice"
import { DomainProfileSelectors } from "app/containers/DomainProfile/selectors"
import { EditWalletsModal } from "./components/EditWalletsModal"
import { DomainDetailTabs } from "./constants"
import { BlockchainSelectors } from "app/containers/Blockchain/selectors"
import { LoadingGrid } from "app/components/grid_loading/componentLoading"

export const ManageProfileDetails = () => {
  const dispatch = useDispatch()
  const domainData = useSelector(DomainProfileSelectors.domainData)
  const txStatus = useSelector(BlockchainSelectors.xNamesTransactionStatus)
  const isLoading = useSelector(DomainProfileSelectors.isLoading)
  const [tab, setTab] = useState(0)

  useEffect(() => {
    if (domainData?.name) {
      dispatch(DomainProfileActions.getDomainProfileData(domainData.name))
    }
    return () => {
      dispatch(DomainProfileActions.setDomainProfileData(undefined))
    }
  }, [domainData?.name])

  useEffect(() => {
    if (!txStatus.success) return

    dispatch(DomainProfileActions.setIsLoading(true))

    setTimeout(() => {
      if (!domainData?.name) return

      dispatch(DomainProfileActions.getDomainProfileData(domainData.name))
    }, 2000)
  }, [txStatus.success])

  const Content = DomainDetailTabs[tab].Page ?? (() => <EmptyContent message="Under construction" />)

  return (
    <Wrapper>
      <EditProfileModal />
      <AddTextRecordModal />
      <EditWalletsModal />
      <Title type="18m26" content="Manage Profile Details" />
      <Group>
        <SideBar tab={tab} setTab={setTab} />
        <ContentWrapper>
          <Content />
        </ContentWrapper>
      </Group>

      <AddSocialAddressModal />

      {isLoading && <LoadingGrid />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  border-radius: 14px;
  padding: 24px;
  background-color: ${CssVariables.Neutral0};

  ${media.sm} {
    padding: 0;
  }
`
const Group = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;

  ${media.sm} {
    flex-direction: column;
  }
`
const ContentWrapper = styled.div`
  border-radius: 12px;
  padding: 24px 16px;
  background-color: ${CssVariables.Gray1};
  width: 100%;
`
