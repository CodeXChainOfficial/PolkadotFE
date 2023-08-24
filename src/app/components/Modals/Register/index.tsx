import { Button } from "app/components/Button"
import { ModalOverlay } from "app/components/ModalOverlay"
import { FC } from "react"
import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"
import { RegTitle } from "./components/Title"
import { NumOfYears } from "./components/NumOfYears"
import { useDispatch, useSelector } from "react-redux"
import { Input } from "app/components/Form/styles"
import { GlobalSelectors } from "app/selectors"
import { globalActions } from "app/slice"
import { RegInfoItem } from "./components/InfoItem"
import { getPriceToPay } from "utils/domainUtils"

export const RegisterModal: FC = () => {
  const dispatch = useDispatch()
  const isOpen = !!useSelector(GlobalSelectors.domaintoRegister)
  const domainDetails = useSelector(GlobalSelectors.domaintoRegister)
  const duration = useSelector(GlobalSelectors.registerDuration)
  const isGift = domainDetails?.gift
  const isExtend = domainDetails?.extending
  const giftRecipient = domainDetails?.giftRecipientAddress

  const { wegldPrice, usdPrice } = getPriceToPay({
    ...((domainDetails ?? {}) as any),
    duration,
  })

  let btnContent = "Register now"
  if (isExtend) {
    btnContent = "Extend"
  }

  const handleRegister = () => {
    dispatch(globalActions.startDomainRegisteration())
  }
  const handleClose = () => {
    dispatch(globalActions.setDomainToRegister(undefined))
    dispatch(globalActions.updateregisterDuration(1))
  }

  const submitButtonDisabledIfGiftAddresIsEmpty = isGift && !giftRecipient

  return (
    <Modal isOpen={isOpen}>
      <RegTitle />
      {isGift && (
        <>
          <StyledInput
            type={"text"}
            placeholder="gift recipient address"
            value={giftRecipient}
            onChange={(e) => {
              dispatch(
                globalActions.setDomainToRegister({
                  ...domainDetails,
                  giftRecipientAddress: e.target.value,
                }),
              )
            }}
          />
        </>
      )}

      <NumOfYears />

      <RegInfoItem content={["Annual Fee:", `$${usdPrice} (~${wegldPrice} WEGLD)`]} />

      <ActionsWrapper>
        <Button
          disabled={submitButtonDisabledIfGiftAddresIsEmpty}
          btn="primary"
          content={btnContent}
          width="100%"
          onClick={handleRegister}
          btnSize="md"
          data-cy="initiateTxBtn"
        />
        <Button btn="secondary" content="Cancel" width="100%" onClick={handleClose} btnSize="md" />
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
  flex-direction: column;
  gap: 12px;
  button {
    width: 100%;
  }
`
