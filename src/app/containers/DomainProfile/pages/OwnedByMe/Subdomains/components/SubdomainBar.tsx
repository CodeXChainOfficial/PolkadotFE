import { DomainType } from "app/types"
import { DeleteSubdomain } from "./DeleteSubdomain"
import { StyledXNameBar, StyledXNameBarGroup, StyledXNameBarText } from "app/components/XNameBar/style"
import { XNameBarCard } from "app/components/XNameBar/XNameBarCard"
import { formatLocaleDate } from "utils/commonUtils"

export const SubdomainBar = (props: Partial<DomainType>) => {
  const { name, expiresAt } = props

  return (
    <StyledXNameBar>
      <XNameBarCard {...props} />
      <StyledXNameBarGroup mr="auto">
        <StyledXNameBarText type="24m24" content={name} />
      </StyledXNameBarGroup>

      <StyledXNameBarGroup>
        <StyledXNameBarText type="16r16">
          <span>First registered</span> {formatLocaleDate(expiresAt! * 1000)}
        </StyledXNameBarText>
        <DeleteSubdomain subdomain={props} />
      </StyledXNameBarGroup>
    </StyledXNameBar>
  )
}
