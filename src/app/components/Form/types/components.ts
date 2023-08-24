import { InputHTMLAttributes, ReactNode, RefObject } from "react"

type HTMLInputProps = InputHTMLAttributes<HTMLInputElement>
type HTMLTextareaProps = InputHTMLAttributes<HTMLTextAreaElement>

export interface InputComponentProps extends Omit<HTMLInputProps, "list"> {
  ref?: RefObject<HTMLInputElement>
  startIcon?: ReactNode
  endIcon?: ReactNode
  state?: "error"
  debug?: boolean
  list?: { value: any; label: ReactNode }[]
  asset?: string
}

export interface TextareaComponentProps extends HTMLTextareaProps {
  state?: "error"
  debug?: boolean
}
