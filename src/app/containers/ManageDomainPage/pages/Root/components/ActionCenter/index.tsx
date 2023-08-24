import { Button } from "app/components/Button"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { CssVariables } from "styles/glob-styles"
import { DomainCardActionPopup } from "./Popover"
import { FC, useRef, useState } from "react"
import { DomainType } from "app/types"

export const DomainCardActionCenter: FC<Partial<DomainType>> = (props) => {
  const [show, setShow] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleOpen = () => {
    setShow((value) => !value)
  }

  return (
    <>
      <Button
        ref={buttonRef}
        btn="secondary"
        btnText="14m20"
        btnSize="sm"
        m="0"
        bg={CssVariables.Neutral800}
        color={CssVariables.Neutral400}
        onClick={handleOpen}
        content="Actions"
        endIcon={<FontAwesomeIcon icon="fa-solid fa-ellipsis" color={CssVariables.Neutral200} />}
      />

      <DomainCardActionPopup
        open={show}
        anchorEl={buttonRef.current}
        onClose={() => setShow(false)}
        name={props.name}
      />
    </>
  )
}
