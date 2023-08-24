import { NavLink } from "react-router-dom"
import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"
import { media } from "styles/media"
import { FontFamilies } from "../Typography"

export const HeaderElement = styled.header`
  position: sticky;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18.5px 16px 18.5px;
  margin-bottom: 4px;
  background-color: ${CssVariables.Neutral900};

  ${media.md} {
    background-color: ${CssVariables.Black};
  }
`

export const NavItems = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;

  ${media.md} {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 16px;
  }
`

export const NavItemLink = styled(NavLink)`
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: 500;
  line-height: 100%;
  font-family: ${FontFamilies.roobertPro};
  color: ${CssVariables.Neutral300};
  transition: 300ms ease-out;
  cursor: pointer;
  &:hover {
    background-color: ${CssVariables.Gray1};
  }
  &.active {
    color: ${CssVariables.Green2};
    background-color: ${CssVariables.Black2};
  }
`
