import { ModalOverlay } from "app/components/ModalOverlay"
import { Title } from "app/components/Typography"
import { DomainProfileSelectors } from "app/containers/DomainProfile/selectors"
import { useSelector } from "react-redux"
import styled from "@emotion/styled"
import { EditWalletsForm } from "./Form"
import { CssVariables } from "styles/glob-styles"

export const EditWalletsModal = () => {
  const isOpen = !!useSelector(DomainProfileSelectors.walletAddressesToUpdate)

  return (
    <StyledModal isOpen={isOpen}>
      <Title type="24m32" content="Set wallet address" color={CssVariables.Neutral300} mb="40px" />

      <EditWalletsForm />
    </StyledModal>
  )
}

const StyledModal = styled(ModalOverlay)`
  width: min(675px, 100%);
  border-radius: 16px;
  padding: 24px;
  background-color: ${CssVariables.Black};
`
