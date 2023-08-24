import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { Typography } from "app/components/Typography"
import { AppPages } from "app/constants"
import { Link } from "react-router-dom"
import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"

export const BackButton = () => {
  return (
    <Wrapper>
      <Link to={AppPages.ManageDomainPage}>
        <LinkContent type="20r22" color={CssVariables.Neutral400}>
          <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
          <span>Manage your domains</span>
        </LinkContent>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  z-index: -999;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 98%;
  border-radius: 20px 20px 0 0;
  padding: 24px 40px;
  background-color: ${CssVariables.Neutral800};
`
const LinkContent = styled(Typography)`
  display: flex;
  align-items: center;
  gap: 10px;
`
