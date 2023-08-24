import styled from "@emotion/styled"
import {
  ExtensionLoginButton,
  LedgerLoginButton,
  WalletConnectLoginButton,
  WebWalletLoginButton,
} from "@multiversx/sdk-dapp/UI"
import { useLocation } from "react-router-dom"
import { CssVariables } from "styles/glob-styles"

type LoginButtonType = "Mobile" | "Hardware" | "Extension" | "Web"

type Props = {
  type: LoginButtonType
  name: string
  img: string
}

export const LoginButton = ({ type, name, img }: Props) => {
  const location = useLocation()

  const commonProps = {
    callbackRoute: location.search.replace("?cbr=", ""),
    nativeAuth: true, // optional
  }

  const Button = getButton(type)

  return (
    <Button {...commonProps} loginButtonText={name}>
      <Title>{type}</Title>

      <img src={img} alt={name} />

      <Text>{name}</Text>
    </Button>
  )
}

const Title = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${CssVariables.Neutral500};
`

const Text = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: ${CssVariables.White};
`

const getButton = (type: LoginButtonType) => {
  return type === "Extension"
    ? ExtensionLoginButton
    : type === "Hardware"
    ? LedgerLoginButton
    : type === "Mobile"
    ? WalletConnectLoginButton
    : WebWalletLoginButton
}
