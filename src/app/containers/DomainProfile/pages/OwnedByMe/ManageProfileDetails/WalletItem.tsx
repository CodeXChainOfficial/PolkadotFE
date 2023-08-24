import { Text } from "app/components/Typography"
import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"
import { addressMinimizer } from "utils/formatters"

type Props = {
  image: string
  name: string
  address?: string
}

export const WalletItem = ({ image, name, address }: Props) => {
  if (!address) address = "Not set"

  return (
    <Wrapper>
      <Image src={image} alt="" />

      <Text type="16r25" content={name} width="100px" />

      <Text type="16r25" content={addressMinimizer(address, { maxChar: 14 })} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${CssVariables.Neutral300};
`

const Image = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 46px;
`
