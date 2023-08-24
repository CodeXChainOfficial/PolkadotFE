import { FC } from "react"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { NavLink } from "react-router-dom"
import { CssVariables } from "styles/glob-styles"
import { IconName } from "@fortawesome/fontawesome-svg-core"
import { Logo } from "app/components/Logo"
import { AppPages } from "app/constants"
import { FooterLink, LinkWrapper, Wrapper } from "./style"

const SocialLinks = {
  twitter: "",
  telegram: "",
}

export const Footer: FC = () => {
  return (
    <Wrapper flexWrap="wrap-reverse">
      <LinkWrapper columnGap={"32px"} flexWrap="wrap" rowGap="10px">
        <FooterLink>
          <NavLink to={AppPages.RootPage}>
          </NavLink>
        </FooterLink>
      </LinkWrapper>
      <LinkWrapper>
        {Object.keys(SocialLinks).map((key, idx) => (
          <FooterLink key={idx}>
            <a href={SocialLinks[key]} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                style={{
                  backgroundColor: "#fff",
                  padding: "6px",
                  borderRadius: "50%",
                }}
                color={CssVariables.Color3}
                icon={`fa-brands fa-${key as IconName}`}
              />
            </a>
          </FooterLink>
        ))}
      </LinkWrapper>
    </Wrapper>
  )
}
