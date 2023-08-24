import { FC } from "react"
import { Button } from "../Button"
import { useNavigate, useLocation } from "react-router-dom"
import { AppPages } from "app/constants"
import { IAuthButtonProps } from "./types"
import { CssVariables } from "styles/glob-styles"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"

export const AuthButton: FC<IAuthButtonProps> = ({ content = "Connect" }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleConnectWalletClick = () => {
    navigate(`${AppPages.UnlockPage}?cbr=${location.pathname}`)
  }

  return (
    <Button
      backgroundColor={CssVariables.Green2Text}
      color={CssVariables.Green2}
      onClick={handleConnectWalletClick}
      content={content}
      endIcon={<FontAwesomeIcon icon={`fa-solid fa-bolt`} fontSize="20px" />}
      btnSize="md"
      data-cy="auth-button"
    />
  )
}
