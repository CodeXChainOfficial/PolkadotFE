/**
 *
 * Unlock Page
 *
 */

import { Helmet } from "react-helmet-async"
import { CssVariables } from "styles/glob-styles"
import { Spacer } from "app/components/common/Spacer"
import { Header, WalletsContainer, Wrapper } from "./style"
import multiversXIcon from "images/unlock/multiversXIcon.png"
import ledgerIcon from "images/unlock/ledgerIcon.png"
import defiIcon from "images/unlock/defiIcon.png"
import { PageLayer } from "app/components/common/PageLayer"
import { Text, Title } from "app/components/Typography"
import { LoginButton } from "./components/LoginButton"

export function UnlockPage() {
  return (
    <PageLayer fullHeight>
      <Helmet>
        <title>Unlock</title>
        <meta name="description" content="Description of Unlock" />
      </Helmet>
      <Wrapper>
        <Header>
          <Title type="28s32" mb="15px">
            Connect your wallet
          </Title>
          <Text type="16s20" color={CssVariables.Neutral500}>
            Choose one of the options below
          </Text>
        </Header>

        <Spacer vSpace={CssVariables.Space40} />

        <WalletsContainer data-cy="wallets-container">
          <LoginButton type="Mobile" name="xPortal App" img={multiversXIcon} />
          <LoginButton type="Hardware" name="Ledger" img={ledgerIcon} />
          <LoginButton type="Extension" name="DeFi Wallet" img={defiIcon} />
          <LoginButton type="Web" name="Web Wallet" img={defiIcon} />
        </WalletsContainer>

        <Spacer vSpace={CssVariables.Space120} />
      </Wrapper>
    </PageLayer>
  )
}
