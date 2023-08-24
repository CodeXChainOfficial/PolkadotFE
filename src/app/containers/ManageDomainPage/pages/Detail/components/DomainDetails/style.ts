import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"
import { media } from "styles/media"

export const Section = styled.section`
  background-color: ${CssVariables.Neutral900};
  padding: 32px;
  margin-top: 16px;
  border-radius: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${media.sm} {
    padding: 20px;
  }
`

export const SectionInfo = styled.div`
  flex-grow: 1;
`

export const Row = styled.div`
  display: flex;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 10px;
`

export const Label = styled.div`
  flex-basis: 150px;
  font-weight: 500;
  color: ${CssVariables.Neutral400};
`
export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  span {
    font-size: 12px;
    color: ${CssVariables.Neutral400};
  }
`

export const XNameCardWrapper = styled.div`
  margin-top: -70px;
  max-width: 270px;

  & > * {
    width: 300px;
    height: 430px;
  }

  ${media.md} {
    display: none;
  }
`
