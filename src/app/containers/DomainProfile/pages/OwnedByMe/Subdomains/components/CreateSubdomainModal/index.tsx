import { ModalOverlay } from "app/components/ModalOverlay"
import { FC } from "react"
import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"
import { RegTitle } from "./components/Title"
import { useDispatch, useSelector } from "react-redux"
import { Input } from "app/components/Form/styles"
import { DomainProfileSelectors } from "app/containers/DomainProfile/selectors"
import { Button } from "app/components/Button"
import { DomainProfileActions } from "app/containers/DomainProfile/slice"

export const CreateSubdomainModal: FC = () => {
  const dispatch = useDispatch()
  const isOpen = !!useSelector(DomainProfileSelectors.subdomainToRegister)
  const subdomainData = useSelector(DomainProfileSelectors.subdomainToRegister)

  const handleRegister = () => {
    dispatch(DomainProfileActions.startSubdomainRegisteration())
  }
  const handleClose = () => {
    dispatch(DomainProfileActions.setSubdomainToRegister(undefined))
  }

  return (
    <Modal isOpen={isOpen}>
      <RegTitle />

      <StyledInput
        type={"text"}
        placeholder="Enter sub name"
        value={subdomainData?.subdomainName || ""}
        onChange={(e) => {
          if (subdomainData)
            dispatch(
              DomainProfileActions.setSubdomainToRegister({
                ...subdomainData,
                subdomainName: e.target.value,
              }),
            )
        }}
      />
      <ActionsWrapper>
        <Button btn="secondary" content="Discard" onClick={handleClose} btnSize="md" btnText="18r20" />
        <Button
          btn="success"
          content="Save Subdomain"
          width="100%"
          onClick={handleRegister}
          btnSize="md"
          btnText="18r20"
        />
      </ActionsWrapper>
    </Modal>
  )
}

const StyledInput = styled(Input)`
  width: 100%;
  background-color: ${CssVariables.Neutral800};
  border-radius: inherit;
  padding: 4px 8px;
  height: 56px;
`

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
  gap: 8px;
`
