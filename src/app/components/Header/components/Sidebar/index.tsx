import { Links } from "../../data"
import { NavItemLink, NavItems } from "../../styles"
import { FullWidthDrawer, SidebarBtn, Wrapper } from "./style"
import { CssVariables } from "styles/glob-styles"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { useSelector } from "react-redux"
import { BlockchainSelectors } from "app/containers/Blockchain/selectors"
import { AuthButton } from "app/components/AuthButton"
import { useSidebar } from "../../hooks/useSidebar"

interface SidebarPropsI {
  handleLogout: () => void
}

export const Sidebar = ({ handleLogout, ...props }: SidebarPropsI) => {
  const connectedAccount = useSelector(BlockchainSelectors.connectedAccount)
  const { isOpen, setState } = useSidebar()

  return (
    <FullWidthDrawer
      anchor="right"
      variant="temporary"
      open={isOpen}
      onClose={() => setState(false)}
      BackdropProps={{
        invisible: true,
      }}
      styles={{ ...props }}
    >
      <Wrapper>
        <NavItems>
          {Links.map(
            (link) =>
              ((link.private && connectedAccount?.address) || !link.private) && (
                <NavItemLink onClick={() => setState(false)} key={link.text} to={link.path} children={link.text} />
              ),
          )}
        </NavItems>

        {connectedAccount?.address ? (
          <SidebarBtn
            btn="secondary"
            btnText="16r20"
            btnSize="sm"
            content="Disconnect"
            onClick={() => {
              handleLogout()
              setState(false)
            }}
            endIcon={<FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" color={CssVariables.Neutral200} />}
          />
        ) : (
          <div className="auth-button" onClick={() => setState(false)}>
            <AuthButton />
          </div>
        )}
      </Wrapper>
    </FullWidthDrawer>
  )
}
