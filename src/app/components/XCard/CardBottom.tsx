import { CssVariables } from "styles/glob-styles"
import { DomainType } from "app/types"
import { XCardProps } from "./types"
import { Text } from "app/components/Typography"
import { Box } from "@mui/material"
import { EGLD_To_xEGLD } from "utils/unitConversion"

export const CardBottom = (props: DomainType & XCardProps) => {
  const { priceEgld, priceUsd, expiresAt, hasPrice, hasExpiresAt } = props

  return (
    <>
      {hasPrice && (
        <>
          <Box display="flex" alignItems="center" gap="4px" mt="23px">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1283_54135)">
                <rect x="0.799805" y="0.316406" width="18" height="18" fill="#000F0E" />
                <path
                  d="M10.2533 9.31641L14.0186 7.21338L13.3855 5.94141L9.93779 7.3993C9.84901 7.43689 9.75059 7.43689 9.66182 7.3993L6.21406 5.94141L5.58105 7.21338L9.34628 9.31641L5.58105 11.4194L6.21406 12.6914L9.66182 11.2335C9.75059 11.1959 9.84901 11.1959 9.93779 11.2335L13.3855 12.6914L14.0186 11.4194L10.2533 9.31641Z"
                  fill="#23F7DD"
                />
              </g>
              <rect x="1.2998" y="0.816406" width="17" height="17" rx="8.5" stroke="#143736" />
              <defs>
                <clipPath id="clip0_1283_54135">
                  <rect x="0.799805" y="0.316406" width="18" height="18" rx="9" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <Text type="16m24" color={CssVariables.Neutral300}>
              {EGLD_To_xEGLD(priceEgld)} EGLD
            </Text>
          </Box>
          <Text type="12m16" mt="4px" color={CssVariables.Neutral500}>
            ~${Number(priceUsd).toFixed(3)}
          </Text>
        </>
      )}
      {hasExpiresAt && (
        <>
          <Text type="14r18" mt="16px" color={CssVariables.Neutral500}>
            Time Left
          </Text>
          <Text mt="5px" type="16s24" content={expiresAt} color={CssVariables.Green2} />
        </>
      )}
    </>
  )
}
