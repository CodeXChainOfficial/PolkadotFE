import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"
import { InputControlProps } from "../types"

export const LabelComponent = ({ label = "", hideLabel }: Partial<InputControlProps>) => {
  if (hideLabel) return <></>

  const [first, ...rest] = label.split("")
  label = first.toUpperCase() + rest.join("")

  return <Label>{label}</Label>
}

const Label = styled.label`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: ${CssVariables.Neutral400};
`
