import { ReactNode } from "react"
import styled from "@emotion/styled"
import { color } from "styled-system"
import { CssVariables } from "styles/glob-styles"

type Props = {
  error?: string | null // Pass error for error message

  color?: string // Color is optional

  content?: string // Pass content or children for non-error message
  children?: ReactNode
}

export const AssistiveTextComponent = ({ error, children, content, ...props }: Props) => {
  children ??= content

  if (!children && !error) return <></>

  if (error) {
    const [first, ...rest] = error.split("")
    children = first.toUpperCase() + rest.join("") // Capitalize the first letter and ***

    props.color = CssVariables.Red400 // *** change color to red.
  }

  return <Wrapper {...props}>{children}</Wrapper>
}

const Wrapper = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: -5px;

  color: ${CssVariables.Neutral300};

  ${color}
`
