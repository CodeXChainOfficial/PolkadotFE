import { DropdownAnimation } from "app/components/Animation"
import { Button } from "app/components/Button"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { useOnClickOutside } from "hooks/onClickOutsideHook"
import { ReactNode, useRef, useState } from "react"
import styled from "@emotion/styled"
import { SpaceProps, space } from "styled-system"
import { CssVariables } from "styles/glob-styles"
import { media } from "styles/media"

interface Props extends SpaceProps {
  label: string
  startIcon?: ReactNode
  content?: ReactNode
}

export const Dropdown = ({ label, startIcon, content, ...rest }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)

  useOnClickOutside(ref, () => setShow(false))

  const handleClick = () => {
    setShow((prev) => !prev)
  }

  return (
    <Wrapper {...rest}>
      <Button
        ref={ref}
        btnText="16m24"
        btn="secondary"
        btnSize="md"
        content={label}
        onClick={handleClick}
        render="div"
        startIcon={startIcon}
        endIcon={<FontAwesomeIcon icon="fa-solid fa-angle-down" rotation={show ? 180 : undefined} />}
      />
      <OptionList reveal={show}>{content}</OptionList>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;

  ${space}

  ${media.sm} {
    width: 100%;
  }
`

const OptionList = styled(DropdownAnimation)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 16px;
  border-radius: inherit;
  background-color: ${CssVariables.Neutral900};
`
