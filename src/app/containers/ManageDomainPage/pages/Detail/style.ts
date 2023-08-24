import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"
import { media } from "styles/media"

export const Wrapper = styled.div`
  background-color: ${CssVariables.Black};
  border-radius: 24px;
  padding: 50px 40px;
  ${media.sm} {
    padding: 25px 15px;
  }
`
