import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"
import { media } from "styles/media"

export const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 577px;
  border-radius: 24px;
  padding: 40px;
  padding-bottom: 0;
  background-color: ${CssVariables.Black2};

  ${media.md} {
    border-radius: 0;
  }

  ${media.sm} {
    gap: 10px;
    padding: 20px 10px;
  }
`

export const BackgroundImage = styled.img`
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: 0;
  height: 95%;
  width: 100%;
`
