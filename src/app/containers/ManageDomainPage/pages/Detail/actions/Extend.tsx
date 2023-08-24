import { AuthorizationRequiredButton } from "app/components/AuthorizationRequiredButton"
import { Button } from "app/components/Button"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { BlockchainSelectors } from "app/containers/Blockchain/selectors"
import { GlobalSelectors } from "app/selectors"
import { globalActions } from "app/slice"
import { useDispatch, useSelector } from "react-redux"
import { CssVariables } from "styles/glob-styles"
import { isExpried } from "utils/commonUtils"
import { getExpirationTime } from "utils/getExpirationTime"

export const ExtendAction = () => {
  const dispatch = useDispatch()
  const txStatus = useSelector(BlockchainSelectors.xNamesTransactionStatus)
  const domainData = useSelector(GlobalSelectors.domainData)

  const isLoading = useSelector(GlobalSelectors.isLoading) || txStatus.pending

  const handleExtendAction = () => {
    if (domainData?.name)
      dispatch(
        globalActions.setDomainToRegister({
          ...domainData,
          extending: true,
        }),
      )
  }

  const expirationTime = getExpirationTime(domainData?.expiresAt)

  if (!domainData || expirationTime.year + 1 >= 3) return <></>

  const expired = isExpried(domainData?.timestamp)

  return (
    <AuthorizationRequiredButton>
      {expired ? (
        <Button
          btn="success"
          btnSize="md"
          borderRadius={12}
          btnText="14m18"
          content="Renew"
          bg={CssVariables.Green2}
          color={CssVariables.Neutral900}
          width="max-content"
          loading={isLoading}
          disabled={isLoading}
        />
      ) : (
        <Button
          content="Extend Domain"
          btn="success"
          borderRadius={12}
          btnText="14m18"
          btnSize="md"
          onClick={handleExtendAction}
          startIcon={<FontAwesomeIcon icon="fa-solid fa-forward" />}
          loading={isLoading}
          disabled={isLoading}
          loadingContent="Extending..."
        />
      )}
    </AuthorizationRequiredButton>
  )
}
