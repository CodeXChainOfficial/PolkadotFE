import { Wrapper } from "../../styles"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { CssVariables } from "styles/glob-styles"
import { Avatar } from "app/components/Avatar"
import { Text } from "app/components/Typography"
import { WalletListButton } from "./styles"
import { Wallet } from "../../types"

interface WalletListProps {
  wallets: Wallet[]
}

export default function WalletList({ wallets }: WalletListProps) {
  return (
    <Wrapper flexDirection="row" columnGap="12px" flexWrap="wrap">
      {wallets.map((wallet) => (
        <WalletListButton
          key={wallet.address}
          btn="secondary"
          btnSize="lg"
          btnText="16r20"
          endIcon={
            <FontAwesomeIcon icon="fa-solid fa-clone" color={CssVariables.Neutral200} style={{ marginLeft: "18px" }} />
          }
        >
          <Avatar src={wallet.walletImageUrl} width="24px" height="24px" borderRadius="50%" />
          <Text type={{ md: "16r25", sm: "14r20", xs: "12r16" }}>{wallet.walletType}:</Text>
          <Text type={{ md: "16r25", sm: "14r20", xs: "12r16" }}>{wallet.address}</Text>
        </WalletListButton>
      ))}
    </Wrapper>
  )
}
