import { Button } from "app/components/Button"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { BlockchainSelectors } from "app/containers/Blockchain/selectors"
import { GlobalSelectors } from "app/selectors"
import { globalActions } from "app/slice"
import { useDispatch, useSelector } from "react-redux"
import { CssVariables } from "styles/glob-styles"

export const RegisterAction = () => {
  const dispatch = useDispatch()
  const txStatus = useSelector(BlockchainSelectors.xNamesTransactionStatus)
  const domainData = useSelector(GlobalSelectors.domainData)
  const isLoading = txStatus.pending
  const setDomainToRegister = () => {
    if (domainData?.name)
      dispatch(
        globalActions.setDomainToRegister({
          ...domainData,
          name: domainData?.name,
        }),
      )
  }

  return (
    <Button
      startIcon={<FontAwesomeIcon icon="fa-solid fa-cart-shopping" />}
      content={`Register ${domainData?.name}`}
      bg={CssVariables.Green4}
      btn="success"
      btnText="16m24"
      borderRadius={12}
      flexGrow="1"
      loading={isLoading}
      disabled={isLoading}
      loadingContent="Registering"
      onClick={setDomainToRegister}
      data-cy="register"
    />
  )
}
