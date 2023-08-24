import { FC } from "react"
import { DomainType } from "app/types"
import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"
import { CardBottom } from "./CardBottom"
import { XNameCard } from "app/components/XNameCard"
import { XCardProps } from "./types"

export const XCard: FC<DomainType & XCardProps> = (props) => {
  return (
    <Wrapper>
      <StyledXNameCard
        {...props}
        textTypes={{ name: "14r10", dateTitle: "8r10", date: "8b10" }}
        qrCode={{ width: 35, height: 35 }}
        xLogo={{ width: "50%" }}
      />

      <CardBottom {...props} />

      {props.children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  width: 100%;
  border-radius: 16px;
  padding: 24px;
  background: ${CssVariables.Neutral0};
  border: 1px solid ${CssVariables.Neutral0};
`

const StyledXNameCard = styled(XNameCard)`
  && {
    max-width: 142px;
    height: 197px;
    padding: 10px;
    padding-left: 23px;
  }
`
