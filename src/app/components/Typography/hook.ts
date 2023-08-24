import { ReactNode } from "react"
import { TypeScaleStr, TypographyProps } from "./types"
import { reduceProp } from "./utilities"
import useDevice from "hooks/useDevice"

type NumStr = number | string

export type ReducedTypographyProps = ReturnType<typeof usePropReducer>

export const usePropReducer = (props: TypographyProps) => {
  const breakpoints = useDevice()

  const doPropReduction = <T>(prop: any) => reduceProp<T>(breakpoints, prop)

  return {
    ...props,
    type: doPropReduction<TypeScaleStr>(props.type),
    content: doPropReduction(props.content) as ReactNode | undefined,
    m: doPropReduction<string>(props.m || props.margin),
    ml: doPropReduction<NumStr>(props.ml || props.marginLeft),
    mb: doPropReduction<NumStr>(props.mb || props.marginBottom),
    textAlign: doPropReduction(props.textAlign),
  }
}
