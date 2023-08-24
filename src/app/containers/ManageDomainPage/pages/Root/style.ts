import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"
import { LoadingGrid } from "app/components/grid_loading/componentLoading"

export const Wrapper = styled.div`
  position: relative;
  border-radius: 24px;
  padding: 40px;
  background-color: ${CssVariables.Black2};
`

export const StyledLoader = styled(LoadingGrid)`
  position: fixed;
`
