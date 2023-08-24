import { NameSuffix } from "app/constants"
import { AddressMinimizerConfig } from "types"

export function queryStringer(params: Record<string, string | number | boolean>): string {
  let qs = "?"
  let counter = 0

  for (let key in params) {
    let prefix = counter === 0 ? "" : "&"
    qs += prefix + key + "=" + params[key]
    counter++
  }

  if (counter === 0) qs = ""

  return qs
}

export const addressMinimizer = (address?: string, config?: AddressMinimizerConfig): string => {
  if (!address || typeof address !== "string") {
    if (typeof address !== "string") console.error("Invalid input @addressMinimizer", address)

    return ""
  }

  const { maxChar = 12, seperator = "..." } = config ?? {}

  if (address.length <= maxChar || address.length <= 10) return address

  const half = Math.ceil(maxChar / 2)

  const firstHalf = address.substring(0, half)
  const lastHalf = address.substring(address.length - half)

  return `${firstHalf}${seperator}${lastHalf}`
}

export const suffixName = (name?: string) => {
  if (name) name = name.replace(NameSuffix, "") + NameSuffix
  return name
}
