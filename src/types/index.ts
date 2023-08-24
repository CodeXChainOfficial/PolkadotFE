import { ReactNode } from "react"
import { RootState } from "./RootState"

export type { RootState }

/**
 * @deprecated
 */
export interface EventHandlerProps {
  onClick?: (e?: any) => void
  onMouseEnter?: (e?: any) => void
  onMouseLeave?: (e?: any) => void
}

export type ModalProps = {
  isOpen?: boolean
  onClose?: (e?: any) => void
}

export type BadgeType = "success" | "warning" | "secondary"

export type SortOption = {
  id: any
  label: ReactNode
}

export type AddressMinimizerConfig = {
  seperator?: string
  maxChar?: number
}
