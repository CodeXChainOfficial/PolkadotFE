import { getTagToRender } from "../utilities"

type FontSize = number
type Weight = "b" | "m" | "r" | "s"
type LineHeight = number

export type TypeScaleStr = `${FontSize}${Weight}${LineHeight}` | `${FontSize}${Weight}`

export type TagToRender = ReturnType<typeof getTagToRender>
