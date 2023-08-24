import { Box } from "@mui/material"
import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"
import { media } from "styles/media"

export const Wrapper = styled.section`
  margin-top: 20px;
  background-color: ${CssVariables.Neutral800};
  padding: 40px;
  border-radius: 24px;
  ${media.md} {
    padding: 20px;
  }
`

export const Top = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;
`

export const NumbersBlockWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

export const NumberBlock = styled.div`
  background-color: ${CssVariables.Neutral900};
  padding: 24px;
  border-radius: 16px;
`

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-column-gap: 16px;
  grid-row-gap: 10px;
  margin-top: 48px;
  ${media.lg} {
    grid-template-columns: repeat(4, 1fr);
  }
  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${media.sm} {
    grid-template-columns: repeat(1, 1fr);
  }
`
