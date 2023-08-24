import { Box } from "@mui/material"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { CssVariables } from "styles/glob-styles"
import { media } from "styles/media"

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: auto;
`

export const Header = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const LoginButtonStyle = css`
  & button {
    all: unset;
    padding: 3rem;
    display: flex;
    flex: 1 1 30%;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: ${CssVariables.Neutral800};
    border-radius: 24px;
    border: transparent;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      background-color: ${CssVariables.Neutral700};
    }

    p,
    img {
      background-color: transparent !important;
    }
  }
`

export const WalletsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: auto;
  width: 100%;

  ${media.md} {
    flex-wrap: wrap;
  }

  ${media.sm} {
    flex-direction: column;
    max-width: 280px;
  }

  ${LoginButtonStyle}
`
