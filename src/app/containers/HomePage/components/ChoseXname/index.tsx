import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { StyledSection } from "../../style"
import { Bottom, BottomItem, LearnMoreBlock, StyledImg, Top } from "./style"
import { Text, Title } from "app/components/Typography"
import ChoseXnameImg from "images/ChoseXname.png"
import { Button } from "app/components/Button"
import { Box } from "@mui/material"
import { CssVariables } from "styles/glob-styles"

export const ChoseXname = () => {
  return (
    <StyledSection>
      <Top>
        <Box display="flex" flexDirection="column">
          <Title type={{ lg: "32r36", md: "20r23" }} content="With Developers in Mind" />
          <Title
            type={{ lg: "32r36", md: "20r23" }}
            content="Build on CodeX, with an Identity you own & chose."
            maxWidth="530px"
            mt="12px"
          />
          <LearnMoreBlock>
            <Text
              type={{ lg: "14s20" }}
              content="CodeX seamlessly integrates with technologies you already use. Add a small JavaScript snippet or plugin to your website to accurately measure your traffic. A powerful API lets you automate any task and work with data in your tools."
              color={CssVariables.Neutral500}
            />
            <Button
              btn="success"
              endIcon={<FontAwesomeIcon icon={`fa-solid fa-arrow-right`} fontSize="14px" />}
              max-width="244px"
              btnSize="md"
              btnText="14s18"
              mt="30px"
              width="max-content"
            >
              Learn More
            </Button>
          </LearnMoreBlock>
        </Box>

        <StyledImg src={ChoseXnameImg} />
      </Top>

      <Bottom>
        <BottomItem>
          <Text type={{ lg: "14s20" }} content="Total Transactions" color={CssVariables.Neutral400} />
          <Text type={{ lg: "32s36", md: "20s22" }} content="412,245,098" color={CssVariables.Green2} />
          <Box color={CssVariables.Green2} display="flex" gap="6px">
            <FontAwesomeIcon icon={`fa-solid fa-circle-plus`} fontSize="14px" />
            <Text type={{ lg: "12s14" }} content="108,075 today"></Text>
          </Box>
        </BottomItem>
        <BottomItem>
          <Text type={{ lg: "14s20" }} content="Total Accounts" color={CssVariables.Neutral400} />
          <Text type={{ lg: "32s36", md: "20s22" }} content="2,019,570" color={CssVariables.Green2} />
          <Box color={CssVariables.Green2} display="flex" gap="6px">
            <FontAwesomeIcon icon={`fa-solid fa-circle-bolt`} fontSize="14px" />
            <Text type={{ lg: "12s14" }} content="209,886 active today"></Text>
          </Box>
        </BottomItem>
        <BottomItem>
          <Text type={{ lg: "14s20" }} content="Tokens" color={CssVariables.Neutral400} />
          <Text type={{ lg: "26s30", md: "16s18" }} content="1,808" color={CssVariables.White} />
        </BottomItem>
        <BottomItem>
          <Text type={{ lg: "14s20" }} content="Applications" color={CssVariables.Neutral400} />
          <Text type={{ lg: "26s30", md: "16s18" }} content="4,709" color={CssVariables.White} />
        </BottomItem>
      </Bottom>
    </StyledSection>
  )
}
