import { ReactNode } from "react"
import { ResponsiveProp, TypeScaleStr, TypographyProps } from "../../Typography"
import { FlexboxProps } from "styled-system"

export interface ButtonProps extends Omit<TypographyProps, "type">, OtherProps {
  type?: "button" | "submit"
  btn?: ButtonType
  btnText?: TypeScaleStr
  btnSize?: ButtonSize

  content?: ReactNode
  children?: ReactNode

  startIcon?: ReactNode
  endIcon?: ReactNode

  loading?: boolean
  loadingContent?: ReactNode

  disabled?: boolean

  width?: string | ResponsiveProp<string>
  maxWidth?: string | ResponsiveProp<string>

  debug?: boolean

  dangerouslySetInnerHTML?: string
  className?: string
  id?: string
}

interface OtherProps extends FlexboxProps {}

export type ButtonType = "default" | "primary" | "secondary" | "danger" | "success" | "warning"

export type ButtonSize = "lg" | "md" | "sm" | "xs"
