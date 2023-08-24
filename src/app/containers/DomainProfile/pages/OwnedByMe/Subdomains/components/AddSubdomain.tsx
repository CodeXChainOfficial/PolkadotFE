import { Button } from "app/components/Button"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { BlockchainSelectors } from "app/containers/Blockchain/selectors"
import { DomainProfileSelectors } from "app/containers/DomainProfile/selectors"
import { DomainProfileActions } from "app/containers/DomainProfile/slice"
import { useDispatch, useSelector } from "react-redux"

export const AddSubdomain = () => {
  const dispatch = useDispatch()
  const domainData = useSelector(DomainProfileSelectors.domainData)
  const txStatus = useSelector(BlockchainSelectors.xNamesTransactionStatus)

  const createSubdomain = () => {
    if (domainData) dispatch(DomainProfileActions.setSubdomainToRegister({ name: domainData?.name }))
  }

  return (
    <Button
      btnText="14m20"
      btn="success"
      btnSize="sm"
      content="Add new subdomain"
      startIcon={<FontAwesomeIcon icon="fa-solid fa-plus" />}
      onClick={createSubdomain}
      disabled={txStatus.pending}
    />
  )
}
