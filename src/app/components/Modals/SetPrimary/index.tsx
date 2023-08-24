import { Button } from "app/components/Button"
import { ModalOverlay } from "app/components/ModalOverlay"
import { FC } from "react"
import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"
import { RegTitle } from "./components/Title"
import { RegLineBreak } from "./components/LineBreak"
import { useDispatch, useSelector } from "react-redux"
import { GlobalSelectors } from "app/selectors"
import { globalActions } from "app/slice"
import { RegInfoItem } from "./components/InfoItem"
import { strShortener } from "utils/commonUtils"

export const SetPrimaryModal: FC = () => {
  const dispatch = useDispatch()
  const isOpen = !!useSelector(GlobalSelectors.domainToPrimary)
  const domainDetails = useSelector(GlobalSelectors.domainToPrimary)
  const address = domainDetails?.address

  const handlePrimarySet = () => {
    dispatch(globalActions.startDomainPrimarySet())
  }
  const handleClose = () => {
    dispatch(globalActions.setDomainToPrimary(undefined))
  }

  return (
    <Modal isOpen={isOpen}>
      <RegTitle />
      <RegInfoItem content={["Address:", strShortener(address, 10)]} />
      <RegLineBreak />
      <ActionsWrapper>
        <Button
          disabled={false}
          btn="primary"
          content={"Set as primary"}
          width="100%"
          onClick={handlePrimarySet}
          btnSize="md"
        />
        <Button btn="secondary" content="cancel" width="100%" onClick={handleClose} btnSize="md" />
      </ActionsWrapper>
    </Modal>
  )
}

const Modal = styled(ModalOverlay)`
  box-sizing: border-box;
  display: grid;
  gap: 20px;
  width: min(459px, 100%);
  background-color: ${CssVariables.Neutral900};
  border-radius: 16px;
  padding: 40px;
`
const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  button {
    width: 100%;
  }
`
