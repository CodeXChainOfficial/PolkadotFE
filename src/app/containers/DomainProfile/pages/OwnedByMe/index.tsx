import styled from "@emotion/styled"
import { Header } from "./components/Header"
import { CssVariables } from "styles/glob-styles"
import { BackButton } from "./components/BackButton"
import { Tabs } from "app/components/Tabs"
import { OwnedByMeContents, getTabConfig } from "./constants"
import { EmptyContent } from "./components/EmptyContent"
import { CreateSubdomainModal } from "./Subdomains/components/CreateSubdomainModal"
import { media } from "styles/media"
import useQueryParams from "hooks/useQueryParams"

const tabConfig = getTabConfig()

export const OwnedByMePage = () => {
  const [queryParam, setQueryParam] = useQueryParams<{ tab: number }>()

  const selectedTab = Number(queryParam.tab ?? "0")

  const Content = OwnedByMeContents[selectedTab] ?? EmptyContent

  const handleSetTab = (tab: number) => {
    setQueryParam({ tab })
  }

  return (
    <>
      <Container>
        <BackButton />

        <Wrapper>
          <Header />

          <StyledTabs {...tabConfig} selectedTab={{ value: selectedTab }} onSelect={(tab) => handleSetTab(tab.value)} />

          <ContentWrapper>
            <Content />
          </ContentWrapper>
        </Wrapper>
      </Container>
      <CreateSubdomainModal />
    </>
  )
}

const Container = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;
  background-color: ${CssVariables.Black4};
  border-radius: 24px;
  padding: 40px;
  margin-top: 70px;

  ${media.md} {
    padding: 20px;
  }
  ${media.sm} {
    padding: 10px;
    border-radius: 0;
  }
`

const StyledTabs = styled(Tabs)`
  padding-inline: 4px;
  width: 100%;
  background-color: ${CssVariables.Neutral900};
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 350px;

  & > * {
    flex-grow: 1;
  }
`
