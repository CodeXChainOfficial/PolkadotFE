import { Title } from "app/components/Typography"
import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"
import { AddSubdomain } from "./components/AddSubdomain"
import { media } from "styles/media"

import { SubdomainList } from "./components/SubdomainList"

export const Subdomains = () => {
  return (
    <Wrapper>
      <TitleGroup>
        <Title type={{ lg: "32r34", sm: "30r32" }} content="Manage your subdomains" />
        <AddSubdomain />
      </TitleGroup>

      <FilterBar></FilterBar>

      <SubdomainList />
    </Wrapper>
  )
}

const Wrapper = styled.div``

const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  background-color: ${CssVariables.Black};
  border-radius: 24px;

  ${media.sm} {
    justify-content: center;
    text-align: center;
    margin-top: 20px;
  }
`

const FilterBar = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 20px 0 15px;

  ${media.sm} {
    display: grid;
    margin-top: 35px;
  }
`
