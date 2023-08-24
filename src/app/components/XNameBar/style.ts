import styled from "@emotion/styled"
import { SpaceProps, space } from "styled-system"
import { CssVariables } from "styles/glob-styles"
import { media } from "styles/media"
import { Typography } from "../Typography"

export const StyledXNameBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  border-radius: 24px;
  padding: 16px;
  background-color: ${CssVariables.Neutral900};

  ${media.sm} {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
  }
`

export const StyledXNameBarGroup = styled.div<SpaceProps>`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;

  ${media.sm} {
    justify-content: space-between;
    width: 100%;
  }

  ${space}
`

export const StyledXNameBarText = styled(Typography)`
  span {
    color: ${CssVariables.Neutral400};
  }
`
