import { ReactNode } from "react"

export type BModalSize = "small" | "medium"

export interface BModalProps {
  isOpen: boolean
  onClose: Function
  modalsize?: BModalSize
  title: string
  children?: ReactNode
}

export interface ModalAlertProps {
  mode: Mode
  title?: string
  children?: ReactNode
}

export type Mode = "success" | "info" | "warning" | "error"
