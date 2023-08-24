import { Text } from "app/components/Typography"
import { PageLayer } from "app/components/common/PageLayer"
import styled from "@emotion/styled"

import whyClaimImgFirst from "images/whyClaimImg-1.png"
import whyClaimImgSecond from "images/whyClaimImg-2.png"
import whyClaimImgThirty from "images/whyClaimImg-3.png"
import { media } from "styles/media"

export default function WhyClaimDomainNameComponent() {
  return (
    <PageLayer>
      <Text type="28m30">Why claim your .mvx domain name?</Text>
      <Wrapper>
        <WhyClaimCard>
          <img src={whyClaimImgFirst} alt="Host projects with your unique web3 domain name" />
          <Text type={{ lg: "21r23", md: "16r18", sm: "21r23" }}>Host projects with your unique web3 domain name</Text>
        </WhyClaimCard>
        <WhyClaimCard>
          <img src={whyClaimImgSecond} alt="" />
          <Text type={{ lg: "21r23", md: "16r18", sm: "21r23" }}>
            Quickly send and receive funds to a human-readable address.
          </Text>
        </WhyClaimCard>
        <WhyClaimCard>
          <img src={whyClaimImgThirty} alt="" />
          <Text type={{ lg: "21r23", md: "16r18", sm: "21r23" }}>
            Collect and exchange .mvx names directly or as NFTs
          </Text>
        </WhyClaimCard>
      </Wrapper>
    </PageLayer>
  )
}

const Wrapper = styled.div`
  display: flex;
  column-gap: 8px;
  flex-wrap: wrap;
  justify-content: space-between;
`

const WhyClaimCard = styled.div`
  width: 32%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  row-gap: 24px;

  img {
    max-width: 100%;
  }

  p {
    width: 90%;
  }

  ${media.lg} {
    width: 30%;
    padding: 20px;
  }

  ${media.md} {
    width: 30%;
    padding: 16px;
  }

  ${media.sm} {
    width: 100%;
  }
`
