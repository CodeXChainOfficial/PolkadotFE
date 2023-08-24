import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"
import { media } from "styles/media"

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`

export const StyledImg = styled.img`
  width: 100%;
  max-width: 400px;
`

export const LearnMoreBlock = styled.div`
  background-color: ${CssVariables.Black};
  margin-top: 20px;
  max-width: 346px;
  padding: 24px;
  border-radius: 16px;
`

export const Bottom = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;
  max-width: 810px;
  margin-top: 20px;
  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
  ${media.sm} {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const BottomItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  background-color: ${CssVariables.Neutral800};
  border-radius: 16px;
  grid-row: 1 / 3;
  padding: 24px;
  &:nth-of-type(3) {
    grid-column: 3;
    flex-direction: row;
    grid-row: 1;
  }
  &:nth-of-type(4) {
    grid-column: 3;
    flex-direction: row;
    grid-row: 2;
  }
  ${media.md} {
    &:nth-of-type(n) {
      grid-column: auto;
      grid-row: auto;
    }
  }
`
