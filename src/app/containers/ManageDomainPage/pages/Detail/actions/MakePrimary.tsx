import { AuthorizationRequiredButton } from "app/components/AuthorizationRequiredButton"
import { Button } from "app/components/Button"
import { BlockchainSelectors } from "app/containers/Blockchain/selectors"
import { GlobalSelectors } from "app/selectors"
import { globalActions } from "app/slice"
import { useDispatch, useSelector } from "react-redux"

export const MakePrimaryAction = () => {
  const dispatch = useDispatch()
  const txStatus = useSelector(BlockchainSelectors.xNamesTransactionStatus)
  const domainData = useSelector(GlobalSelectors.domainData)
  const isLoading = useSelector(GlobalSelectors.isLoading) || txStatus.pending

  if (domainData?.primaryAddress) return <></>

  const handleSetPrimaryDomain = () => {
    if (domainData?.name)
      dispatch(
        globalActions.setDomainToPrimary({
          name: domainData?.name,
          address: domainData?.ownerAddress,
        }),
      )
  }

  return (
    <AuthorizationRequiredButton>
      <Button
        content="Make Domain Primary"
        btn="success"
        borderRadius={12}
        btnText="14m18"
        btnSize="md"
        onClick={handleSetPrimaryDomain}
        loading={isLoading}
        disabled={isLoading}
      />
    </AuthorizationRequiredButton>
  )
}
