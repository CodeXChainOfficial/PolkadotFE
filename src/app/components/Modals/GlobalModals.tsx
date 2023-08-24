import { memo } from "react"
import { ConnectWalletInfo } from "./WalletConnection"
import { DisconnectWallet } from "./DisconnectWallet"
import { WalletQrCodeDataDistributor } from "./walletQrCodeDataDistributor"
import { RegisterModal } from "./Register"
import { SetPrimaryModal } from "./SetPrimary"
import { TransferOwnershipModal } from "./TransferOwnership"

export const GlobalModals = memo(
  () => {
    return (
      <>
        <WalletQrCodeDataDistributor />
        <ConnectWalletInfo />
        <DisconnectWallet />
        <RegisterModal />
        <SetPrimaryModal />
        <TransferOwnershipModal />
      </>
    )
  },
  () => true,
)
