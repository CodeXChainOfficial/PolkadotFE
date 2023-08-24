import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GlobalSelectors } from "app/selectors"
import { globalActions } from "app/slice"
import TransactionDetails from "./components/TransferDomain"
import { Modal } from "./styles"

export const TransferOwnershipModal: FC = () => {
  const dispatch = useDispatch()
  const isOpen = !!useSelector(GlobalSelectors.domainToTransferOwnership)

  const onClose = () => {
    dispatch(globalActions.setDomainToTransferOwnership(undefined))
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <TransactionDetails />
    </Modal>
  )
}
