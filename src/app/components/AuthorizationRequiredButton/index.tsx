import { ButtonProps } from "@mui/material"
import { FC } from "react"
import { useSelector } from "react-redux"
import { ButtonProps as MxButtonProps } from "../Button"
import { BlockchainSelectors } from "app/containers/Blockchain/selectors"
import { AuthButton } from "../AuthButton"

interface Props {
  children?: any
  text?: string
}

export const AuthorizationRequiredButton: FC<ButtonProps & MxButtonProps & Props> = ({ children, text }) => {
  const account = useSelector(BlockchainSelectors.connectedAccount)
  const loggedIn = !!account?.address
  if (!loggedIn) {
    return <AuthButton {...(text ? { content: text } : {})} />
  }
  return children
}
