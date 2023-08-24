import { Text } from "app/components/Typography"
import { SmallXNameCardSvg } from "images/styledImages/SmallXNameCard"
import { FC } from "react"
import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"

interface Props {
  name?: string
}

export const NameCard: FC<Props> = ({ name }) => {
  return (
    <Wrapper>
      <Card>
        <SmallXNameCardSvg />
      </Card>

      <Stack>
        <Text type="14m20" content={name} mb="5px" />
        <Text type="12s16" content="Token ID:" color={CssVariables.Neutral500} />
      </Stack>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 90px;
  border-radius: 8px;
  padding: 12px;
  background-color: ${CssVariables.Neutral800};
`

const Card = styled.div``

const Stack = styled.div``
