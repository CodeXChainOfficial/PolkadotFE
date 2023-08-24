import {
  SpaceProps,
  LayoutProps,
  ColorProps,
  TypographyProps,
  BorderRadiusProps,
  BorderProps,
  FlexboxProps,
  FlexProps,
} from "styled-system"

export interface TypographyPropsFromStyledSystem
  extends SpaceProps,
    LayoutProps,
    ColorProps,
    TypographyProps,
    BorderRadiusProps,
    BorderProps,
    FlexboxProps,
    FlexProps {}
