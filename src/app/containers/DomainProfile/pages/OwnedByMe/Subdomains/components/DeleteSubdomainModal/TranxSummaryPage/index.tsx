import styled from "@emotion/styled"
import { Text, Title } from "app/components/Typography"
import { Button } from "app/components/Button"
import { NameCard } from "./NameCard"
import { useDeleteSubdomainModal } from "../useDeleteSubdomainModal"
import { FC } from "react"
import { DomainProfileActions } from "app/containers/DomainProfile/slice"
import { useDispatch, useSelector } from "react-redux"
import { DomainProfileSelectors } from "app/containers/DomainProfile/selectors"
import { DomainType } from "app/types"

interface Props {
  subdomain?: Partial<DomainType>
}

export const TranxSummaryPage: FC<Props> = ({ subdomain = {} }) => {
  const dispatch = useDispatch()
  const { setOpenModal } = useDeleteSubdomainModal()
  const domain = useSelector(DomainProfileSelectors.domainData)?.name || ""

  const handleClose = () => {
    setOpenModal(false)
  }

  const deleteSubdomain = () => {
    if (!subdomain.name) return

    handleClose()

    dispatch(
      DomainProfileActions.startSubdomainDeletion({
        domain,
        subdomain: subdomain.name,
      }),
    )
  }

  return (
    <Wrapper>
      <Title type="24m32" content="Confirm Details" />

      <NameCard name={subdomain.name} />

      <Group>
        <Button btnText="18m28" content="Discard" btn="secondary" width="91px" onClick={handleClose} />

        <Button btnText="18m28" content="Remove Subdomain" btn="success" width="100%" onClick={deleteSubdomain} />
      </Group>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Group = styled.div`
  display: flex;
  gap: 20px;
`

const FeeWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`
const Fee = styled(Text)`
  text-transform: uppercase;
`
