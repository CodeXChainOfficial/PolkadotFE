import styled from "@emotion/styled"
import { FormStyles } from ".."
import { InputComponentProps } from "../types"
import { InputColors } from "../styles"

export const InputComponent = ({ ref, list, ...props }: InputComponentProps) => {
  let { startIcon, endIcon, state, className, ...rest } = props

  if (state) className = `${className ?? ""} ${state}`

  return (
    <Wrapper className={className}>
      <StartIcon>{startIcon}</StartIcon>
      <FormStyles.ComponentInput {...rest} />
      <EndIcon>{endIcon}</EndIcon>
    </Wrapper>
  )
}

const Wrapper = styled.div`
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
`

const StartIcon = styled.div`
  position: absolute;
  left: 10px;
  cursor: pointer;
`
const EndIcon = styled.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
`
