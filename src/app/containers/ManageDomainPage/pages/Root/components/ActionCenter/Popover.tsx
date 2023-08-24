import { Popover, PopoverProps } from "@mui/material"
import { Button } from "app/components/Button"
import { Typography, Title } from "app/components/Typography"
import { AppPages } from "app/constants"
import { globalActions } from "app/slice"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"
import { removeNameSuffix } from "utils/commonUtils"
import { BlockchainSelectors } from "app/containers/Blockchain/selectors"

interface Props extends PopoverProps {
  name?: string
  onClose: () => void
}

export const DomainCardActionPopup = ({ name, onClose, ...props }: Props) => {
  const dispatch = useDispatch()
  const txStatus = useSelector(BlockchainSelectors.xNamesTransactionStatus)

  function handleTransferOwnership() {
    if (name) {
      dispatch(globalActions.setDomainToTransferOwnership({ name }))
      onClose()
    }
  }

  return (
    <StyledPopover onClose={onClose} {...props}>
      <Wrapper>
        <Title type="16m24" content="Actions" color={CssVariables.Neutral300} />

        <Link to={AppPages.DomainProfile + `/${removeNameSuffix(name)}`}>
          <SecondaryButton content="Manage Domain" />
        </Link>
        <Text content="Set up your mappings, txt records and more" />

        <Link to={`${AppPages.ManageDomainPage}/${removeNameSuffix(name)}`}>
          <SecondaryButton content="View Domain Details" />
        </Link>
        <Text content="View you domain Detail" />

        <SecondaryButton onClick={handleTransferOwnership} content="Transfer Ownership" disabled={txStatus.pending} />
        <Text content="List this domain for sale on the xNames marketplace" />
      </Wrapper>
    </StyledPopover>
  )
}

const StyledPopover = styled(Popover)`
  .MuiPopover-paper {
    background-color: ${CssVariables.Neutral900};
    border-radius: 16px;
    border: 1px solid ${CssVariables.White};
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 24px;
  width: 251px;
  border-radius: inherit;
`

const Text = ({ content }: { content: string }) => {
  return <Typography type="12s16" content={content} color={CssVariables.Neutral500} mt="-5px" />
}

const SecondaryButton = ({
  onClick,
  ...rest
}: {
  disabled?: boolean
  content: string
  onClick?: (arg?: any) => any
}) => {
  return (
    <Button
      btn="secondary"
      btnSize="md"
      btnText="14m20"
      color={CssVariables.Neutral300}
      width="max-content"
      onClick={onClick}
      {...rest}
    />
  )
}
