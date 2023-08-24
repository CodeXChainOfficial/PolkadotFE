import styled from "@emotion/styled"
import { InputComponent } from "../components/Input"
import { InputControlProps } from "../types/controls"
import { LabelComponent } from "../components/Label"
import { useInputError } from "../hooks/useInputError"
import { AssistiveTextComponent } from "../components/AssistiveText"

export const InputControl = ({ label, form, ...rest }: InputControlProps) => {
  const { setField, setTouched, data } = form
  const { name } = rest

  const error = useInputError(name, form)
  const value = data[name] ?? ""

  return (
    <Wrapper>
      <LabelComponent label={label ?? name} />
      <InputComponent
        {...rest}
        value={value}
        onChange={(e) => setField(name, e.target.value)}
        onBlur={() => setTouched(name)}
        state={error ? "error" : undefined}
      />
      <AssistiveTextComponent error={error} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  gap: 10px;
`
