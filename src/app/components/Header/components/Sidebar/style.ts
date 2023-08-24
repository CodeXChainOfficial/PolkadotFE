import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"
import { Drawer } from "@mui/material"
import { Button } from "app/components/Button"
import { CSSProperties } from "react"

export const FullWidthDrawer = styled(Drawer)<CSSProperties & any>`
  z-index: 1;

  .MuiPaper-root {
    padding-top: 60px;
    width: 100%;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 24px;
  background-color: ${CssVariables.Neutral900};
`

export const SidebarBtn = styled(Button)`
  width: max-content;
  color: ${CssVariables.Neutral300};
  background-color: ${CssVariables.Neutral800};
`
