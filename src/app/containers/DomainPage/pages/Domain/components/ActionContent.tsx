import styled from "@emotion/styled"
import { DomainPrice } from "./DomainPrice"
import { media } from "styles/media"
import { GiftAction } from "../actions/Gift"
import { RegisterAction } from "../actions/Register"
import { ViewProfileAction } from "../actions/ViewProfile"
import { AuthorizationRequiredButton } from "app/components/AuthorizationRequiredButton"
import { ActionsIfUserIsTheOwner } from "./ActionsIfUserIsTheOwner"

export const ActionContent = ({ isAvailable, isOwner }: { isAvailable: boolean; isOwner: boolean }) => {
  return (
    <Group>
      {isAvailable ? (
        <>
          <DomainPrice />
          <AuthorizationRequiredButton>
            <RegisterAction />
            <GiftAction />
          </AuthorizationRequiredButton>
        </>
      ) : isOwner ? (
        <ActionsIfUserIsTheOwner />
      ) : (
        <>
          <ViewProfileAction />
          {/* <MakeOfferAction /> */}
        </>
      )}
    </Group>
  )
}

const Group = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-block: auto;
  max-width: 591px;

  ${media.sm} {
    margin-block: 20px;
  }
`
