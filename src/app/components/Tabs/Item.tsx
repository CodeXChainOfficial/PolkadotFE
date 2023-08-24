import styled from "@emotion/styled"
import { TabProps, TabStyleProps } from "./types"
import { useState } from "react"
import { Button } from "../Button"
import { color } from "styled-system"

export const TabItem = ({ tab, selectedTab, tabStyle, onSelect }: TabProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const isSelected = tab.value === selectedTab.value

  let styl: TabStyleProps = { ...tabStyle?.default }

  if (isHovered) styl = { ...styl, bg: styl.bg, ...tabStyle?.hover }
  if (isSelected) styl = { ...styl, ...tabStyle?.selected }

  const raiseSelect = () => {
    if (onSelect) onSelect(tab)
  }

  const { type, size, ...restStyle } = styl

  return (
    <Item
      {...(restStyle as any)}
      btnText={type || "16s20"}
      btnSize={size}
      height="100%"
      render="div"
      content={tab.label}
      onClick={raiseSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  )
}

const Item = styled(Button)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-radius: 8px;
    padding: 0 17px;
    cursor: pointer;
    transition: 0.35s linear;

    ${color}
  }
`
