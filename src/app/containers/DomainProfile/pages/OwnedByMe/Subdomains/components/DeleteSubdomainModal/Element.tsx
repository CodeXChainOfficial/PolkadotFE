import { ModalOverlay } from "app/components/ModalOverlay"
import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"
import { TranxSummaryPage } from "./TranxSummaryPage"
import { useDeleteSubdomainModal } from "./useDeleteSubdomainModal"
import { FC } from "react"
import { DomainType } from "app/types"

interface Props {
  subdomain?: Partial<DomainType>
}

export const DeleteSubdomainModal: FC<Props> = ({ subdomain }) => {
  const {
    data: { openModal },
    setOpenModal,
  } = useDeleteSubdomainModal()

  const handleClose = () => {
    setOpenModal(false)
  }

  return (
    <StyledModal isOpen={openModal} onClose={handleClose}>
      <TranxSummaryPage subdomain={subdomain} />
    </StyledModal>
  )
}

const StyledModal = styled(ModalOverlay)`
  width: min(459px, 100%);
  border-radius: 16px;
  padding: 40px;
  background-color: ${CssVariables.Neutral0};
  color: ${CssVariables.Neutral100};
`
