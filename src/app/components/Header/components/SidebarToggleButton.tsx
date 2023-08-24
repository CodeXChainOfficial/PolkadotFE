import styled from "@emotion/styled"
import { Button } from "@mui/material"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { media } from "styles/media"
import { useSidebar } from "../hooks/useSidebar"

export const SidebarToggleButton = () => {
  const { isOpen, setState } = useSidebar()

  const handleClick = () => {
    setState(!isOpen)
  }

  return (
    <StyledButton onClick={handleClick}>
      <FontAwesomeIcon icon={`fa-solid fa-${isOpen ? "x" : "grid"}`} />
    </StyledButton>
  )
}

const StyledButton = styled(Button)`
  display: none;

  ${media.md} {
    display: flex;
    min-width: unset;
    min-height: unset;
    width: 38px;
    height: 38px;
    border-radius: 12px;
    background-color: #262626;
    color: #a3a3a3;

    &:hover {
      background-color: #343232;
    }
  }
`
