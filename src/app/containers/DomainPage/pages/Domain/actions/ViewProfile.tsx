import { Button } from "app/components/Button"
import { AppPages } from "app/constants"
import { GlobalSelectors } from "app/selectors"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { CssVariables } from "styles/glob-styles"
import { removeNameSuffix } from "utils/commonUtils"

export const ViewProfileAction = () => {
  const navigate = useNavigate()
  const domainData = useSelector(GlobalSelectors.domainData)

  return (
    <Button
      content="View Profile"
      data-cy="view-profile"
      bg={CssVariables.Green4}
      btn="success"
      borderRadius={12}
      flexGrow="1"
      btnText="16b18"
      onClick={() => navigate(`${AppPages.DomainProfile}/${removeNameSuffix(domainData?.name)}`)}
    />
  )
}
