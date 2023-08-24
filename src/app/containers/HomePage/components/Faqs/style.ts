import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"

export const StyledImg = styled.img``

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`

export const RedirecLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${CssVariables.White};
`

interface StyledProps {
  show: boolean
}

export const Header = styled.div<StyledProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  color: ${({ show }) => (show ? CssVariables.White : CssVariables.Neutral200)};
  padding: 29px;
  background-color: ${CssVariables.Black};
  cursor: pointer;
`

export const Body = styled.div<StyledProps>`
  width: 100%;
  height: ${({ show }) => (show ? "auto" : "0")};
  padding: ${({ show }) => (show ? "20px" : "0")};
  transition: all 0.3s linear;
  color: ${({ show }) => (show ? CssVariables.White : "transparent")};
  user-select: ${({ show }) => (show ? "text" : "none")};
  font-size: 16px;
  font-style: italic;
  text-align: justify;
  background-color: ${CssVariables.Neutral800};
  a,
  a:visited,
  a:hover,
  a:active {
    color: ${CssVariables.Cyan};
  }
`
