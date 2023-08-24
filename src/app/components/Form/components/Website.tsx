import styled from "@emotion/styled"
import { FormStyles } from ".."
import { InputComponentProps } from "../types"
import { InputColors } from "../styles"
import { CssVariables } from "styles/glob-styles"

export const WebsiteInputComponent = ({ ref, list, ...props }: InputComponentProps) => {
  let { startIcon, endIcon, state, className, ...rest } = props

  if (state) className = `${className ?? ""} ${state}`

  return (
    <Wrapper className={className}>
      <FormStyles.ComponentInput {...rest} />
      <TextSlot>.com</TextSlot>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 8px;
  border: 1.5px solid ${InputColors.border};

  transition: 0.4s ease-in-out;

  &:hover {
    border-color: ${InputColors.hover};
  }

  &:focus-within {
    border-color: ${InputColors.focus};
  }

  &.error {
    border-color: ${InputColors.error};
  }

  input {
    border-radius: 0;
  }
`

const TextSlot = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

  height: 44px;
  border-radius: 0px;
  padding: 0px 12px 0px 12px;
  background: rgba(64, 64, 64, 0.7);
  height: 100%;
  color: ${CssVariables.Neutral300};
`
