import { TextFieldProps } from "@mui/material"
import { FC } from "react"
import { StyledInput } from "./style"

interface Props {}

export const NormalInput: FC<TextFieldProps & Props> = ({ ...otherProps }) => {
  return <StyledInput {...otherProps} />
}
