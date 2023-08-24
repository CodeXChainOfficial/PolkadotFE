import { globalActions } from "app/slice"
import { useDispatch } from "react-redux"
import { BModal } from "../BModal"
import { StyledText } from "./style"

export const DisconnectWallet = () => {
  const dispatch = useDispatch()

  const onClose = () => dispatch(globalActions.setIsOpenDisconnectWallet(false))

  return (
    <BModal isOpen={false} onClose={onClose} modalsize="medium" title="Disconnect Wallet">
      <StyledText>Are you sure you want to disconnect this wallet from this website?</StyledText>
    </BModal>
  )
}
