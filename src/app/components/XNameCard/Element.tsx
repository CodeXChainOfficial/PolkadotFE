import { Images, NameSuffix } from "app/constants"
import styled from "@emotion/styled"
import { Blur } from "./components/Svg-Blur"
import { Text, TypeScaleStr } from "../Typography"
import { CssVariables } from "styles/glob-styles"
import { FloatingAddress } from "./components/Address"
import { useRef } from "react"
import { QRCode } from "./components/QRCode"
import { formatCreatedDate } from "./utilities"
import { DomainType } from "app/types"
import { SpaceProps, color, space } from "styled-system"

interface Props extends DomainType {
  textTypes?: {
    name?: TypeScaleStr
    dateTitle?: TypeScaleStr
    date?: TypeScaleStr
  }
  qrCode?: {
    width?: number
    height?: number
  }
  xLogo?: { width?: string; mb?: string }
  xNamesLogo?: { width?: string; mb?: string }
  hasQrCode: boolean
  bg?: string
}

export const XNameCard = ({
  name = "",
  ownerAddress,
  createdAt,
  textTypes,
  qrCode,
  xLogo,
  xNamesLogo,
  hasQrCode = true,
  ...rest
}: Partial<Props>) => {
  const ref = useRef<HTMLDivElement>(null)

  name = name.replace(NameSuffix, "") + NameSuffix
  // name = name.replace(NameSuffix, "").substring(0, 10) + NameSuffix

  if (name.length > 8) {
    //i.e.: name + .mvx if > 8
    name = name.substring(0, 4) + "..." + NameSuffix
  }

  const date = formatCreatedDate(createdAt)

  return (
    <Wrapper {...rest} ref={ref}>
      <XNameLogo src={Images.xNameBlack} alt="" width={xNamesLogo?.width || "65px"} mb={xNamesLogo?.mb || "20px"} />


      <Text type={textTypes?.name || "40m46"} content={name} />

      <Blur fill={rest.bg} />

      <Group>
        <div>
          <Text type={textTypes?.dateTitle || "10s16"} content="Registered since" mb="3px" />
          <Text type={textTypes?.date || "14s20"} content={date} />
        </div>

        {hasQrCode && <QRCode {...qrCode} name={name || ""} />}
      </Group>

      {ownerAddress && <FloatingAddress ref={ref} address={ownerAddress} />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  border-radius: 12px;
  padding-block: 20px;
  padding-inline: 40px 20px;
  color: ${CssVariables.Gray1};

  ${color}
`

const XNameLogo = styled.img<SpaceProps>`
  display: block;
  ${space}
`

const XLogo = styled.img<SpaceProps>`
  display: block;
  ${space}
`

const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
`
