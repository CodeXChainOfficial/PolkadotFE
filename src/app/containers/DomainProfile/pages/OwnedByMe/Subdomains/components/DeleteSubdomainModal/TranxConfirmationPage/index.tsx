import { Title } from "app/components/Typography"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { CssVariables } from "styles/glob-styles"

export const TranxConfirmationPage = () => {
  return (
    <Wrapper>
      <Title type="24r32" content="Please check your DeFi Wallet to confirm this transaction" textAlign="center" />

      <IconWrapper>
        <FontAwesomeIcon icon="fa-duotone fa-spinner" size="10x" spin color={CssVariables.Green4} />
      </IconWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 350px;
`
const IconWrapper = styled.div`
  margin-block: auto;
`
