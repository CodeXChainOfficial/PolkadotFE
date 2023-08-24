import { css } from "@emotion/react"
import { CssVariables } from "styles/glob-styles"
import { BadgeType } from "types"

type T = string

type Colors = Record<BadgeType, { color: T; background: T }>

export const badgeColors: Colors = {
  success: { color: CssVariables.Green2, background: CssVariables.Gradient2 },
  warning: { color: CssVariables.Yellow, background: CssVariables.Yellow },
  secondary: {
    color: CssVariables.Neutral500,
    background: CssVariables.Neutral900,
  },
}

export const getColor = (badge: BadgeType) => {
  const colors = badgeColors[badge]

  return css`
    color: ${colors.color};
    background: ${colors.background};
    border-color: ${colors.color};
  `
}
