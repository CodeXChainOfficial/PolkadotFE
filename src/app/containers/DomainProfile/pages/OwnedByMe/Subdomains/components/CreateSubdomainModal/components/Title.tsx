import { Title } from "app/components/Typography"
import { Images } from "app/constants"
import { DomainProfileSelectors } from "app/containers/DomainProfile/selectors"
import { useSelector } from "react-redux"
import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"

export const RegTitle = () => {
  const domainData = useSelector(DomainProfileSelectors.domainData)
  return (
    <Wrapper>
      <Icon src={Images.circleXIcon} alt="icon" />
      <Title type="24m28" content={domainData?.name} color={CssVariables.White} />
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
