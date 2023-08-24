import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { AppPages } from "app/constants"
import { NavItemLink, NavItems, HeaderElement } from "./styles"
import { logout } from "@multiversx/sdk-dapp/utils"
import { BlockchainSelectors } from "app/containers/Blockchain/selectors"
import { AuthButton } from "../AuthButton"
import { Logo } from "../Logo"
import { Links } from "./data"
import { Sidebar } from "./components/Sidebar"
import { UserMenu } from "./components/UserMenu"
import styled from "@emotion/styled"
import { SidebarToggleButton } from "./components/SidebarToggleButton"
import { media } from "styles/media"

export const Header = () => {
  const navigate = useNavigate()
  const connectedAccount = useSelector(BlockchainSelectors.connectedAccount)

  const handleLogout = () => {
    logout()
    navigate(AppPages.UnlockPage)
  }

  return (
    <>
      <HeaderElement data-cy="header">
        <StyledLink to={AppPages.RootPage}>
          <Logo />
        </StyledLink>

        <StyledNavItems>
          {Links.map(
            (link) =>
              ((link.private && connectedAccount?.address) || !link.private) && (
                <NavItemLink key={link.text} to={link.path} children={link.text} />
              ),
          )}

          <UserMenu connectedAccount={connectedAccount} onLogout={handleLogout} />

          {!connectedAccount?.address && <AuthButton />}
        </StyledNavItems>

        <SidebarToggleButton />
      </HeaderElement>

      <Sidebar handleLogout={handleLogout} />
    </>
  )
}

const StyledNavItems = styled(NavItems)`
  ${media.md} {
    display: none;
  }
`

const StyledLink = styled(Link)`
  display: inline-block;
  margin-right: auto;
`
