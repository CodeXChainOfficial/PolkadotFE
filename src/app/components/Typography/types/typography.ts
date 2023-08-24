import { ReactNode } from "react"
import { TypeScaleStr } from "./typescale"
import { FontFamilies, FontWeights } from "../constants"
import { TypographyPropsFromStyledSystem } from "./styledSystem"
import { HTMLElementProps, AllowedHTMLTag } from "./reactProps"

export interface TypographyProps extends TypographyPropsFromStyledSystem, HTMLElementProps {
  // Eg:type='32b40' Where, 32 = fontSize, b = fontWeight, and 40 = lineHeight
  // See typescale.ts
  type?: TypeScaleStr | ResponsiveProp<TypeScaleStr>

  ff?: FontFamilyKey

  // gap?: string

  children?: ReactNode
  content?: ReactNode | ResponsiveProp<ReactNode>

  className?: string
  id?: string

  render?: AllowedHTMLTag // To render a specific html tag of your choice. Use carefully though
  debug?: boolean

  dangerouslySetInnerHTML?: string

  style?: any
  ref?: any
}

export type ResponsiveProp<Type> = {
  lg?: Type
  md?: Type
  sm?: Type
  xs?: Type
}

//                              [xs, sm, md, lg]
// export type ResponsiveProp<T> = [T?, T?, T?, T?]

export type FontFamilyKey = keyof typeof FontFamilies

export type FontWeightKey = keyof typeof FontWeights
