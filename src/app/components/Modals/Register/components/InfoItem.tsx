import { Text } from "app/components/Typography"
import { ReactNode } from "react"
import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"

type Props = {
  content: [ReactNode, ReactNode]
}

export const RegInfoItem = ({ content }: Props) => {
  const [first, last] = content

  return (
    <ItemWrapper>
      <Text type="14s20" render="div" content={first} color={CssVariables.Neutral400} />

      <Text type="14m20" render="div" content={last} color={CssVariables.Neutral200} minWidth="109px" />
    </ItemWrapper>
  )
}

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
