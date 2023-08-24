import ToolsYouLoveImg from "images/tools-you-love.png"
import { StyledSection } from "../../style"
import { StyledImg } from "./style"
import { Title } from "app/components/Typography"
import { Button } from "app/components/Button"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"

export const ExploreMarketplace = () => {
  return (
    <StyledSection mt="56px">
      <Title
        type={{ lg: "32s34", md: "20s22" }}
        content="Connect your Domain with the tools you love. Improve workflows and get more done with native integrations."
        maxWidth="530px"
        mb="20px"
      />
      <StyledImg src={ToolsYouLoveImg} alt="tools-img" />
      <Button
        btn="secondary"
        endIcon={<FontAwesomeIcon icon={`fa-solid fa-arrow-right`} fontSize="14px" />}
        max-width="244px"
        btnSize="md"
        btnText="14r18"
        m="21px auto 0"
      >
        Explore Marketplace
      </Button>
    </StyledSection>
  )
}
