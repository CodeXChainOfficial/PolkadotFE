import { InputComponentProps, TextareaComponentProps } from "./components"
import { ReactNode } from "react"
import { useForm } from "../hooks/useForm"

export type FormData = Record<string, any>

export type UseFormReturn = ReturnType<typeof useForm>

export interface FormControlProps {
  className?: string
  children?: ReactNode
  onSubmit: (data: any) => void
  form: UseFormReturn
  initialData?: FormData
}

export interface InputControlProps extends Omit<InputComponentProps, "form"> {
  name: string
  form: UseFormReturn
  label?: string
  showPasswordCheck?: boolean
  assistiveText?: string
  hideLabel?: boolean
}

export interface TextareaControlProps extends Omit<TextareaComponentProps, "form"> {
  name: string
  form: UseFormReturn
  label?: string
  showPasswordCheck?: boolean
  assistiveText?: string
}

// export type ControlList<FormDataType> = ControlListItem<FormDataType>[]

// export interface ControlList<Name> extends Omit<InputControlProps, "name"> {
//   name: Name
//   control: string
// }
