import { Text } from "app/components/Typography"
import { Images } from "app/constants"
import { GlobalSelectors } from "app/selectors"
import { useSelector } from "react-redux"
import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"

export const RegTitle = () => {
  const domainToRegister = useSelector(GlobalSelectors.domainToPrimary)
  return (
    <Wrapper>
      <Icon src={Images.circleXIcon} alt="icon" />
      <Text type="32m41" content={domainToRegister?.name} color={CssVariables.White} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  height: 80px;
  margin-bottom: 10px;
`

const Icon = styled.img``
