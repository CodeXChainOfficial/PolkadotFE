import styled from "@emotion/styled"
import { Button, Menu, MenuItem } from "@mui/material"
import { AccountType } from "@multiversx/sdk-dapp/types"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { useRef, useState } from "react"
import { CssVariables } from "styles/glob-styles"
import { addressMinimizer } from "utils/formatters"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"

interface Props {
  connectedAccount?: AccountType
  onLogout: () => void
}

export const UserMenu = ({ connectedAccount, onLogout }: Props) => {
  const ref = useRef<any>(null)
  const [open, setOpen] = useState(false)

  if (!connectedAccount?.address) return <></>

  const handleClick = () => {
    setOpen(true)
  }

  const raiseLogout = () => {
    onLogout()
    setOpen(false)
  }

  return (
    <>
      <StyledButton onClick={handleClick} ref={ref}>
        <FontAwesomeIcon
          icon="fa-solid fa-badge"
          color={CssVariables.Green2}
          style={{ fontSize: "10px", left: "17px" }}
        />

        {addressMinimizer(connectedAccount.address)}

        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </StyledButton>

      <StyledMenu open={open} anchorEl={ref.current} onClose={() => setOpen(false)}>
        <StyledMenuItem onClick={raiseLogout} style={{ color: CssVariables.Red1 }}>
          Logout
        </StyledMenuItem>
      </StyledMenu>
    </>
  )
}

const StyledButton = styled(Button)`
  color: #e7ffe6;
  font-family: Roobert PRO;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  gap: 10px;
  text-transform: none;
  border-radius: 12px;
  background-color: #033009;
  padding: 10px;

  &:hover {
    background-color: #0c4313;
  }
`

const StyledMenu = styled(Menu)`
  div {
    background-color: transparent;
    min-width: 190px;
  }

  ul {
    z-index: 999;
    border-radius: 5px;
    background: ${CssVariables.Neutral800};
    color: ${CssVariables.Neutral300};
    padding: 0;
  }
`

const StyledMenuItem = styled(MenuItem)`
  width: 100%;
  text-transform: none;
  justify-content: flex-start;
`
