import { Button } from "app/components/Button"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { BlockchainSelectors } from "app/containers/Blockchain/selectors"
import { GlobalSelectors } from "app/selectors"
import { globalActions } from "app/slice"
import { useDispatch, useSelector } from "react-redux"

export const GiftAction = () => {
  const dispatch = useDispatch()
  const txStatus = useSelector(BlockchainSelectors.xNamesTransactionStatus)
  const domainData = useSelector(GlobalSelectors.domainData)
  const isLoading = txStatus.pending
  const setDomainToRegister = () => {
    if (domainData)
      dispatch(
        globalActions.setDomainToRegister({
          ...domainData,
          gift: true,
        }),
      )
  }

  return (
    <Button
      loading={isLoading}
      disabled={isLoading}
      loadingContent="Gifting"
      onClick={setDomainToRegister}
      startIcon={<FontAwesomeIcon icon="fa-solid fa-gift" />}
      content="Gift"
      btn="secondary"
      borderRadius={12}
      minWidth="133px"
    />
  )
}
