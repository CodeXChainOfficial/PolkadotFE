import { Title } from "app/components/Typography"
import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"
import { Button } from "app/components/Button"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { useSelector } from "react-redux"
import { DomainProfileSelectors } from "app/containers/DomainProfile/selectors"
import { media } from "styles/media"
import { useNavigate } from "react-router-dom"
import { removeNameSuffix } from "utils/commonUtils"
import { AppPages } from "app/constants"

export const Header = () => {
  const navigate = useNavigate()
  const domainData = useSelector(DomainProfileSelectors.domainData)

  const name = domainData?.name

  return (
    <Wrapper>
      <Title type="52r57" content={name} color={CssVariables.Neutral200} />

      <Button
        btnText="14m20"
        btn="secondary"
        btnSize="sm"
        content="View Domain Details"
        endIcon={<FontAwesomeIcon icon="fa-regular fa-arrow-up-right-from-square" />}
        onClick={() => navigate(`${AppPages.ManageDomainPage}/${removeNameSuffix(name)}`)}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;

  ${media.sm} {
    flex-direction: column;
    margin-bottom: 15px;
  }
`
