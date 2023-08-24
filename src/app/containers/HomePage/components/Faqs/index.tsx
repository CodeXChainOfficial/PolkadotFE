import FaqsImg from "images/faqs.png"
import { RedirecLink, StyledImg, Top } from "./style"
import { StyledSection } from "../../style"
import { Text, Title } from "app/components/Typography"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { CssVariables } from "styles/glob-styles"
import DropDown from "app/components/DropDown"

export const Faqs = () => {
  return (
    <StyledSection>
      <Top>
        <StyledImg src={FaqsImg} />
        <RedirecLink href="/">
          <Text type={{ lg: "14s20" }} content="Ask us anything" />
          <FontAwesomeIcon icon={`fa-regular fa-arrow-up-right-from-square`} fontSize="14px" />
        </RedirecLink>
      </Top>

      <Title type={{ lg: "32r36", md: "20r22" }} content="FAQs" mt="25px" />
      <Text
        type={{ lg: "32r36", md: "20r22" }}
        content="Improve workflows and get more done with native integrations."
        color={CssVariables.Neutral500}
        maxWidth="530px"
        m="35px 0"
      />

      <DropDown items={FAQs} />
    </StyledSection>
  )
}

export const FAQs = [
  {
    id: 1,
    title: "What is a wallet?",
    body: "A wallet is a place where you keep all your grails. It's like a digital vault that keeps everything safe and secure. A wallet is a piece of software that allows you to interact with your NFTs. Your NFTs don't leave the blockchain, neither does it exist inside your wallet. Rather your wallet lets you access them and transfer ownership when need be.",
  },
  {
    id: 2,
    title: "How to connect my wallet?",
    body: "Make sure to download the CryptoX app wallet and create an account.",
  },
  {
    id: 3,
    title: "How do I get one?",
    body: "Mint one here. Or if you missed out on the primary sale, you can buy one from our upcoming marketplace.",
  },
]
