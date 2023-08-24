import { ButtonProps } from "./types/type"
import { reduceProp } from "../Typography"
import useDevice from "hooks/useDevice"

export const useReduceProps = (props: ButtonProps) => {
  const breakpoints = useDevice()

  const doPropReduction = (prop: any) => reduceProp(breakpoints, prop)

  return {
    ...props,
    btnText: doPropReduction(props.btnText),
    width: doPropReduction(props.width),
    maxWidth: doPropReduction(props.maxWidth),
  }
}
