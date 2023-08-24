import { Stack } from "./style"
import { ManageDomainBar } from "../DomainBar"
import { DomainsType } from "app/types"
import { useSelector } from "react-redux"
import { ManageDomainsPageSelectors } from "app/containers/ManageDomainPage/selectors"

export const ActiveDomains = ({ domains }: { domains?: DomainsType }) => {
  const isLoading = useSelector(ManageDomainsPageSelectors.isLoadingDomains)

  if (!domains || domains.length === 0) {
    if (isLoading) return <></>

    return <>No domains</>
  }

  return (
    <Stack>
      {domains.map((card, idx) => (
        <ManageDomainBar key={idx} {...card} />
      ))}
    </Stack>
  )
}
