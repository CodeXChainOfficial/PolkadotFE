import styled from "@emotion/styled"
import { FormStyles } from ".."
import { TextareaComponentProps } from "../types"
import { InputColors } from "../styles"

export const TextareaComponent = (props: TextareaComponentProps) => {
  let { state, className, ...rest } = props

  if (state) className = `${className ?? ""} ${state}`

  return <TextareaElement className={className} {...(rest as any)} as={"textarea" as any} />
}

const TextareaElement = styled(FormStyles.ComponentInput)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;

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
