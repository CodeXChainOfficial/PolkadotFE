import { PageLayer } from "app/components/common/PageLayer"
import { Avatar } from "app/components/Avatar"
import { CssVariables } from "styles/glob-styles"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { Wrapper } from "../../styles"
import WalletList from "./WalletList"
import { UserData } from "../../types"
import { MVXLinks } from "../../constants"
import { HeaderText } from "./styles"
import { IconName } from "@fortawesome/fontawesome-svg-core"

const iconsName: IconName[] = ["location-dot", "globe"]

export default function DomainDetailHeader(user: UserData) {
  return (
    <PageLayer>
      <Wrapper rowGap={"33px"}>
        <Avatar src={user.imageUrl} name={user.name} borderRadius="50%" />
        <Wrapper rowGap={"8px"}>
          <HeaderText type={{ md: "52m60", sm: "30m40" }} color={CssVariables.Neutral200}>
            {user.name}
          </HeaderText>
          <HeaderText type={{ md: "26m26", sm: "18m18" }} color={CssVariables.Green2}>
            {user.username}
            <FontAwesomeIcon
              icon="fa-solid fa-clone"
              fontSize="22px"
              style={{ marginLeft: "10px", marginBottom: "3px" }}
              color={CssVariables.Neutral600}
            />
          </HeaderText>
        </Wrapper>
        <Wrapper rowGap={"16px"}>
          <HeaderText type={{ md: "16r20", sm: "14m18" }} color={CssVariables.Neutral400} maxWidth="500px">
            {user.description}
          </HeaderText>
          <Wrapper flexDirection="row" columnGap="24px" flexWrap="wrap">
            {Object.keys(user.address).map((address, index) =>
              index < 2 ? (
                <HeaderText
                  width={{ sm: "max-content", xs: "100%" }}
                  key={address}
                  type={{ md: "16r17", sm: "12r14" }}
                  color={CssVariables.Neutral100}
                >
                  <FontAwesomeIcon
                    icon={`fa-regular fa-${iconsName[index]}`}
                    fontSize="16px"
                    style={{ marginRight: "4px", marginBottom: "1px" }}
                    color={CssVariables.Neutral500}
                  />
                  {user.address[address]}
                </HeaderText>
              ) : (
                <FontAwesomeIcon
                  key={address}
                  icon={`fa-brands fa-${address as IconName}`}
                  fontSize="20px"
                  style={{ marginRight: "-8px", cursor: "pointer" }}
                  color={CssVariables.Neutral200}
                />
              ),
            )}
          </Wrapper>
        </Wrapper>
        <WalletList wallets={user.wallets} />
        <Wrapper flexDirection="row" flexWrap="wrap" columnGap="24px" marginTop="47px">
          {MVXLinks.map((link) => (
            <HeaderText type={{ md: "16r17", sm: "13r14" }} color={CssVariables.Neutral400} key={link.text}>
              <FontAwesomeIcon
                icon="fa-regular fa-globe"
                fontSize="16px"
                style={{ marginRight: "4px", marginBottom: "1px" }}
                color={CssVariables.Neutral500}
              />
              {link.text}
            </HeaderText>
          ))}
        </Wrapper>
      </Wrapper>
    </PageLayer>
  )
}
