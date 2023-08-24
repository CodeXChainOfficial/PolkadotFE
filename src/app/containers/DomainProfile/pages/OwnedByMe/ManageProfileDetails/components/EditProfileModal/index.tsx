import { ModalOverlay } from "app/components/ModalOverlay"
import { Title } from "app/components/Typography"
import { DomainProfileSelectors } from "app/containers/DomainProfile/selectors"
import { useSelector } from "react-redux"
import styled from "@emotion/styled"
import { EditProfileForm } from "./Form"
import { CssVariables } from "styles/glob-styles"

export const EditProfileModal = () => {
  const isOpen = !!useSelector(DomainProfileSelectors.domainPropsToUpdate)

  return (
    <StyledModal isOpen={isOpen}>
      <Title type="24m32" content="Edit Profile Info" color={CssVariables.Neutral300} mb="40px" />

      <EditProfileForm />
    </StyledModal>
  )
}

const StyledModal = styled(ModalOverlay)`
  width: min(675px, 100%);
  border-radius: 16px;
  padding: 24px;
  background-color: ${CssVariables.Black};
  border: 1px solid white;
`
