import { Typography } from "app/components/Typography"
import { ReactNode } from "react"
import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"

interface RecordItemProps {
  contents: [ReactNode, ReactNode]
}

export const RecordItem = ({ contents }: RecordItemProps) => {
  const [first, last] = contents

  return (
    <Item type="16r16" ff="roobertPro" render="div">
      <span>{first}</span>
      <span>{last}</span>
    </Item>
  )
}

const Item = styled(Typography)`
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${CssVariables.Neutral400};

  span: {
    display: inline-block;
  }

  span:first-child {
    width: 100px;
  }

  span:last-child {
    color: ${CssVariables.Neutral300};
  }
`
