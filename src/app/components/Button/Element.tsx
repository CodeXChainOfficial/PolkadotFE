import { forwardRef } from "react"
import styled from "@emotion/styled"
import { layout, space, color, typography, border, flexbox } from "styled-system"
import { ButtonProps } from "./types"
import { buttonElementConfig } from "./utilities"
import { useReduceProps } from "./hook"
import { getColor, getSize } from "./configurations"

export const Button = forwardRef((props: ButtonProps, ref) => {
  let { content, children, loading, disabled, startIcon, endIcon, type = "button", className, ...rest } = props

  disabled = loading || disabled
  children = content ?? children

  rest = useReduceProps(rest)

  if (rest.debug) {
    // debugButton = true
    // display logs for debugging an issue
  }

  if (disabled) className = `${className} bbutton-disabled`

  return (
    <ButtonElement {...(rest as any)} ref={ref as any} className={className} type={type} {...buttonElementConfig(rest)}>
      {startIcon}
      {children}
      {endIcon}
    </ButtonElement>
  )
})

const ButtonElement = styled.button<any>`
  all: unset;
  box-sizing: border-box;

  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  border: 1px solid transparent;
  border-radius: 6px;

  cursor: pointer;
  opacity: 1;
  transition: all 0.3s ease-in;

  ${(props) => getColor(props.btn)};
  ${(props) => getSize(props.btnSize)};

  &:active {
    scale: 0.9;
  }

  &.bbutton-disabled {
    opacity: 0.3;
    cursor: not-allowed;
    pointer-events: none;
  }

  ${space};
  ${color};
  ${layout};
  ${border};
  ${typography};
  ${flexbox}
`
