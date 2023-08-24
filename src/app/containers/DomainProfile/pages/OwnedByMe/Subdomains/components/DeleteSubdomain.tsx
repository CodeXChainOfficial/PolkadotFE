import { Button } from "app/components/Button"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { CssVariables } from "styles/glob-styles"
import { DeleteSubdomainModal } from "./DeleteSubdomainModal"
import { useDeleteSubdomainModal } from "./DeleteSubdomainModal"
import { FC } from "react"
import { useSelector } from "react-redux"
import { BlockchainSelectors } from "app/containers/Blockchain/selectors"
import { DomainType } from "app/types"

interface Props {
  subdomain?: Partial<DomainType>
}

export const DeleteSubdomain: FC<Props> = ({ subdomain }) => {
  const txStatus = useSelector(BlockchainSelectors.xNamesTransactionStatus)
  const { setOpenModal } = useDeleteSubdomainModal()

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  return (
    <>
      <Button
        btnText="16r18"
        btnSize="xs"
        btn="secondary"
        bg="transparent"
        onClick={handleOpenModal}
        content={<FontAwesomeIcon icon="fa-solid fa-trash-can" color={CssVariables.Neutral200} size="lg" />}
        disabled={txStatus.pending}
      />

      <DeleteSubdomainModal subdomain={subdomain} />
    </>
  )
}
