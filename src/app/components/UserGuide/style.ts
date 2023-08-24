import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"
import { media } from "styles/media"

export const Wrapper = styled.section`
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(auto);
  gap: 16px;
  justify-content: center;
  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${media.sm} {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 40px;
  background-color: ${CssVariables.Black2};
  border-radius: 16px;
  width: 100%;
`

export const StyledImg = styled.img`
  width: 50%;
`
