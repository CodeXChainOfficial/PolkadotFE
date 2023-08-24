import { CSSProperties } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

export const Wrapper = styled.div<any>`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  justify-content: center;
  align-items: center;
  ${(props: CSSProperties) => css`
    {...props}
  `}
`
