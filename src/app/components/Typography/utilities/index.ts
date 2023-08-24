import { TypeScaleStr, ResponsiveProp, FontWeightKey, FontFamilyKey } from "../types"
import { FontFamilies, FontWeights } from "../constants"
import { ReducedTypographyProps } from "../hook"
import { getNumsFromStr } from "utils/getNumFromStr"
import { DeviceBoolean } from "styles/media"

export const textElementConfig = (props: ReducedTypographyProps) => {
  const scales = getScaleFromType(props.type, props.debug)

  if (props.debug) console.warn(scales)

  return {
    ...scales,
    as: props.render ?? scales.render,
    fontFamily: props.ff ? FontFamilies[props.ff] : scales.fontFamily,
  }
}

export const getScaleFromType = (type: TypeScaleStr = "16r24", debug?: boolean) => {
  const nums = getNumsFromStr(type)
  const [fs, lh] = nums // fontSize, lineHeight (lh = optional)

  const weight = nums
    .reduce((res, next) => res.replace(`${next}`, ""), type as string)
    .replaceAll(".", "") as FontWeightKey

  // const weight = type
  //   .replace(`${fontSize}`, "")
  //   .replace(`${lineHeight}`, "") as FontWeightKey

  const render = getTagToRender(fs)

  let ff: FontFamilyKey = render === "p" ? "inter" : "roobertPro"

  return {
    // fontSize: fontSize / 16 + "rem", // 16 is based on 16px set on the body element.
    fontSize: fs + "px",
    lineHeight: lh ? lh + "px" : undefined,
    render,
    fontWeight: FontWeights[weight],
    fontFamily: FontFamilies[ff],
  }
}

export const getTagToRender = (fontSize: number) => {
  // Note: this part has nothing to do with style-guide from designers.

  if (fontSize >= 70) return "h1"
  // 70 and above
  else if (fontSize >= 60) return "h2"
  // 60 to 69
  else if (fontSize >= 50) return "h3"
  // 50 to 59
  else if (fontSize >= 40) return "h4"
  // 40 to 49
  else if (fontSize >= 30) return "h5"
  // 30 to 39
  else if (fontSize >= 24) return "h6"
  // 24 to 29
  else return "p"
}

export const reduceProp = <Type>(device: DeviceBoolean, prop?: Type | ResponsiveProp<Type>) => {
  let value = undefined as Type | undefined

  if (typeof prop === "object" && checkProperties(prop as Object)) {
    const { xs, sm, md, lg } = prop as ResponsiveProp<Type>

    if (device.xs) value = xs ?? sm ?? md ?? lg
    else if (device.sm) value = sm ?? md ?? lg
    else if (device.md) value = md ?? lg
    else value = lg ?? md ?? sm ?? xs
  } else {
    value = prop as Type
  }

  // Note: value is the smallest available at each breakpoint or the single value provided.
  return value
}

const checkProperties = (obj: Object) => {
  const keys = ["lg", "md", "sm", "xs"].map((key) => obj.hasOwnProperty(key))

  if (keys.some((isTrue) => isTrue)) return true

  return false
}
