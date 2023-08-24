import { ReactNode } from "react"
import { ColorProps, LayoutProps, SpaceProps } from "styled-system"
import { TypeScaleStr } from "../Typography"
import { ButtonSize } from "../Button"

export interface TabsProps {
  selectedTab: Tab
  list: Tab[]
  className?: string
  onSelect?: (tab: Tab) => void

  tabStyle?: TabStylesConfig
  debug?: boolean
}

export interface TabProps extends Pick<TabsProps, "selectedTab" | "tabStyle" | "onSelect" | "debug"> {
  tab: Tab
}

export type Tab = {
  value: any
  label?: ReactNode
}

export interface Style extends ColorProps, SpaceProps {}

export type TabStylesConfig = {
  default?: TabStyleProps
  hover?: TabStyleProps
  selected?: TabStyleProps
}

export interface TabStyleProps extends ColorProps, LayoutProps {
  type?: TypeScaleStr
  size?: ButtonSize
}
