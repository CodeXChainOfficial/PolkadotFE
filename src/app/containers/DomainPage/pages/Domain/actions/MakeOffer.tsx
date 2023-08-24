import { AuthorizationRequiredButton } from "app/components/AuthorizationRequiredButton"
import { Button } from "app/components/Button"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"

export const MakeOfferAction = () => {
  return (
    <AuthorizationRequiredButton>
      <Button
        startIcon={<FontAwesomeIcon icon="fa-solid fa-money-check-dollar" />}
        content="Make an Offer"
        btn="secondary"
        borderRadius={12}
        width={{ lg: "214px", sm: "100%" }}
      />
    </AuthorizationRequiredButton>
  )
}
