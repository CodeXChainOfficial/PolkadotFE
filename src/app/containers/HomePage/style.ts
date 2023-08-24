import { Box } from "@mui/material"
import styled from "@emotion/styled"
import { media } from "styles/media"

export const Wrapper = styled.div``

export const StyledSection = styled(Box)`
  padding: 24px 40px;
  background-color: #141414;
  border-radius: 16px;
  width: 100%;
  margin-top: 16px;
  ${media.md} {
    padding: 20px;
  }
  ${media.sm} {
    padding: 16px 15px;
  }
`
