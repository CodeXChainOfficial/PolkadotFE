import { useSelector } from "react-redux"
import { BlockchainSelectors } from "app/containers/Blockchain/selectors"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

interface Props {
  ownerAddress?: string
  redirectRoute: string
}

export const useRedirectNotOwnerHook = ({ ownerAddress, redirectRoute }: Props) => {
  const navigate = useNavigate()
  const connectedAccount = useSelector(BlockchainSelectors.connectedAccount)

  useEffect(() => {
    if (connectedAccount?.address !== ownerAddress && ownerAddress) {
      navigate(redirectRoute)
    }
  }, [ownerAddress])
}
