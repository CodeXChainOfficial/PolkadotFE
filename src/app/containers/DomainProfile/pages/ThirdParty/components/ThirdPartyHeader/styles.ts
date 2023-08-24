import { Button } from "app/components/Button"
import { Text } from "app/components/Typography"
import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"

export const HeaderText = styled(Text)`
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: scale 300ms ease-out;
  user-select: none;
  &:active {
    scale: 1.01;
  }
`

export const WalletListButton = styled(Button)`
  border-radius: 24px;
  background-color: ${CssVariables.Neutral800};
  color: ${CssVariables.Neutral400};

  @media (max-width: 778px) {
    width: 100%;
    padding: 10px 15px;
  }
`
