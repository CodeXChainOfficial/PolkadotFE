import { FC, useRef, useState } from "react"
import styled from "@emotion/styled"
import { SortOption } from "types"
import { CssVariables } from "styles/glob-styles"
import { SortOptions } from "./Options"
import { Config } from "./type"
import { useOnClickOutside } from "hooks/onClickOutsideHook"
import { Typography } from "../Typography"

type Props = {
  value: SortOption
  options: SortOption[]
  onChange: (value: SortOption) => void
  labelConfig?: Config
  optionsConfig?: Config
}

export const Sort: FC<Props> = ({ value, options, onChange, labelConfig, optionsConfig }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [reveal, setReveal] = useState(false)

  useOnClickOutside(ref, () => setReveal(false))

  const raiseChange = (value: SortOption) => {
    setReveal(false)
    onChange(value)
  }

  const toggleReveal = () => {
    setReveal(!reveal)
  }

  return (
    <Wrapper ref={ref}>
      <Label
        type="18m28"
        content={value.label}
        color={CssVariables.Neutral400}
        bg={CssVariables.Neutral800}
        padding="10px 24px"
        borderRadius={6}
        onClick={toggleReveal}
        {...labelConfig}
      />

      <SortOptions options={options} onChange={raiseChange} reveal={reveal} config={optionsConfig} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  z-index: ${CssVariables.ZIndexModal};
`

const Label = styled(Typography)`
  display: flex;
  justify-content: center;
`
