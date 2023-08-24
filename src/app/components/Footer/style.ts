import { CSSProperties } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { CssVariables } from "styles/glob-styles"
import { media } from "styles/media"

export const Wrapper = styled.footer<any>`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  background-color: ${CssVariables.Color3};
  padding: 40px;
  border-radius: 24px;
  row-gap: 20px;

  ${media.md} {
    padding: 20px;
    flex-direction: column;
  }

  ${(props: CSSProperties) => css`
    {...props}
  `}
`

export const LinkWrapper = styled.ul<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 12px;

  ${(props: CSSProperties) => css`
    {...props}
  `}
`

export const FooterLink = styled.li`
  a {
    color: ${CssVariables.Neutral300};
  }
`
