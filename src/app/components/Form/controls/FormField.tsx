import { InputControlProps, TextareaControlProps } from "../types/controls"
import { AssetControl } from "./Asset"
import { InputControl } from "./Input"
import { TextareaControl } from "./Textarea"
import { WebsiteControl } from "./Website"

const FormControls = {
  input: InputControl,
  textarea: TextareaControl,
  website: WebsiteControl,
  asset: AssetControl,
}

export type FormFieldProps = {
  control?: keyof typeof FormControls
} & (InputControlProps | TextareaControlProps)

export const FormField = ({ control = "input", ...rest }: FormFieldProps) => {
  const Control = FormControls[control]

  return <Control {...(rest as any)} />
}
