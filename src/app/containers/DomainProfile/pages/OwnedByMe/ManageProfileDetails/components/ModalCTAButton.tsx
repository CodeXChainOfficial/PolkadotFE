import { Button, ButtonProps } from "app/components/Button"
import styled from "@emotion/styled"
import { useSelector } from "react-redux"
import { BlockchainSelectors } from "app/containers/Blockchain/selectors"

export const ModalCTAButton = (props: Partial<ButtonProps>) => {
  const txStatus = useSelector(BlockchainSelectors.xNamesTransactionStatus)

  return <StyledButton btnText="10r10" btnSize="sm" btn="secondary" {...props} disabled={txStatus.pending} />
}

const StyledButton = styled(Button)`
  && {
    position: absolute;
    right: 0;
  }
`
