import { FontFamilies, getScaleFromType } from "../../Typography"
import { ButtonProps } from "../types"

export const buttonElementConfig = (props: Pick<ButtonProps, "btnText" | "render" | "ff">) => {
  const scales = getScaleFromType(props.btnText || "18m28")

  return {
    ...scales,
    as: props.render ?? "button",
    fontFamily: props.ff ? FontFamilies[props.ff] : scales.fontFamily,
  }
}
