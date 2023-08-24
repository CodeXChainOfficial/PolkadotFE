import { XNameCard } from "app/components/XNameCard"
import styled from "@emotion/styled"
import { media } from "styles/media"
import { FC } from "react"
import { DomainType } from "app/types"

export const XNameBarCard: FC<Partial<DomainType>> = (props) => {
  const { name } = props

  return (
    <StyledXNameBarCard
      name={name}
      xNamesLogo={{ width: "50%", mb: "5px" }}
      xLogo={{ width: "70%", mb: "0px" }}
      textTypes={{ name: "5b5", dateTitle: "5r5", date: "5b5" }}
      qrCode={{ width: 10, height: 10 }}
      hasQrCode={false}
    />
  )
}

const StyledXNameBarCard = styled(XNameCard)`
  height: 69px;
  width: 50px;
  padding: 3px;
  border-radius: 2px;

  ${media.sm} {
    display: none;
  }
`
