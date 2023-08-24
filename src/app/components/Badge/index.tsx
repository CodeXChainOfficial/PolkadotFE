import { BadgeType } from "types"
import { getColor } from "./config"
import { TypeScaleStr, Typography, TypographyProps } from "../Typography"
import styled from "@emotion/styled"

interface BadgeProps extends Omit<TypographyProps, "type" | "content" | "ref"> {
  badge: BadgeType
  content: string
  badgeText?: TypeScaleStr
}

export const Badge = ({ content, badge, badgeText = "12m16", ...rest }: BadgeProps) => {
  return (
    <BadgeItem
      border="1px solid transparent"
      borderRadius="4px"
      padding="4px 8px"
      badge={badge}
      m="0"
      {...rest}
      type={badgeText}
      render="span"
    >
      {content}
    </BadgeItem>
  )
}

const BadgeItem = styled(Typography)<{ badge: BadgeType }>`
  display: inline-block;
  text-transform: uppercase;

  ${(props) => getColor(props.badge)}
`
