import { Text } from "app/components/Typography"
import { InputsWrapper } from "../styles"
import { NormalInput } from "app/components/Inputs"
import { CssVariables } from "styles/glob-styles"
import { TextFieldProps, TextareaAutosize, TextareaAutosizeProps } from "@mui/material"
import styled from "@emotion/styled"

export default function TransactionDetailsInput(
  props: TextFieldProps & TextareaAutosizeProps & { label: string; isTextArea?: boolean },
) {
  const { label, isTextArea, ...rest } = props

  return (
    <InputsWrapper>
      <Text type="14m20" color={CssVariables.Neutral300}>
        {label}
      </Text>
      {isTextArea ? <StyledTextArea {...rest} /> : <NormalInput {...rest} type="text" fullWidth />}
    </InputsWrapper>
  )
}

const StyledTextArea = styled(TextareaAutosize)`
  padding: 12px;
  border: none;
  outline: none;
  background-color: ${CssVariables.Neutral900};
  color: ${CssVariables.Neutral200};
  border-radius: 8px;
  max-height: 200px;
  min-height: 50px;

  &::placeholder {
    color: ${CssVariables.Neutral500};
  }
`
