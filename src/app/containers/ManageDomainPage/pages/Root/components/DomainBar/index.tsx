import { DomainCardActionCenter } from "../ActionCenter"
import { XNameBarCard } from "app/components/XNameBar/XNameBarCard"
import { Badge } from "app/components/Badge"
import { DomainType } from "app/types"
import moment from "moment"
import { FC } from "react"
import { StyledXNameBar, StyledXNameBarGroup, StyledXNameBarText } from "app/components/XNameBar/style"
import { getExpirationTime } from "utils/getExpirationTime"

export const ManageDomainBar: FC<DomainType> = (props) => {
  const { name, createdAt, expiresAt, primaryAddress } = props

  const createdSince = moment(createdAt * 1000).fromNow()
  const expirationTime = getExpirationTime(expiresAt)

  return (
    <StyledXNameBar>
      <XNameBarCard {...props} />

      <StyledXNameBarGroup mr="auto">
        <StyledXNameBarText type="24m24" content={name} />

        {primaryAddress && <Badge badge="success" content="primary domain" height="auto" />}
      </StyledXNameBarGroup>

      <StyledXNameBarGroup>
        {createdAt && (
          <StyledXNameBarText type="16r16">
            <span>First registered</span> {createdSince} ago
          </StyledXNameBarText>
        )}

        {expiresAt && (
          <StyledXNameBarText type="16r16" color={expirationTime.color}>
            <span>Renews in</span> {expirationTime.timeLeft}
          </StyledXNameBarText>
        )}

        <DomainCardActionCenter {...props} />
      </StyledXNameBarGroup>
    </StyledXNameBar>
  )
}
