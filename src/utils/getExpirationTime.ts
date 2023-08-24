import moment from "moment"
import { CssVariables } from "styles/glob-styles"

/**
 *
 * @param expiresAt expirationDate in seconds | milliseconds.
 * @param time specify if expiresAt provided is in seconds or milliseconds. Default = seconds
 * @returns ExpirationTimeResult
 */

export const getExpirationTime = (expiresAt?: number, time: "seconds" | "milliseconds" = "seconds") => {
  const result: ExpirationTimeResult = {
    timeLeft: "---",
    color: "",
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  }

  if (!expiresAt || expiresAt < 1) return result

  if (time === "seconds") expiresAt *= 1000

  for (let i = 0; i < Configs.length; i++) {
    result.timeLeft = getTimeLeftHelper(expiresAt, Configs[i])
    if (result.timeLeft) break
  }

  if (!result.year && !result.month && result.day < 22) result.color = CssVariables.Red2

  if (!result.timeLeft) {
    result.timeLeft = "expired"
    result.color = CssVariables.Red2
  }

  function getTimeLeftHelper(expiresAt: number, config: Config) {
    const { divider, unitsOfTime } = config

    const diff = moment(expiresAt).diff(new Date().getTime(), unitsOfTime[1])

    const whole = Math.floor(diff / divider)
    const remainder = Math.floor(diff % divider)

    if (whole > 0) result[unitsOfTime[0]] = whole
    if (remainder > 0) result[unitsOfTime[1]] = remainder

    return `${timeLeftToText(whole, unitsOfTime[0])} ${timeLeftToText(remainder, unitsOfTime[1])}`.trim()
  }

  return result
}

type UnitOfTimeSingular = "year" | "month" | "day" | "hour" | "minute" | "second"

const timeLeftToText = (value: number, unitOfTime: UnitOfTimeSingular) => {
  if (value > 1) return `${value} ${unitOfTime}s`
  else if (value === 1) return `${value} ${unitOfTime}`
  return ""
}

type Config = {
  divider: 12 | 24 | 60
  unitsOfTime: [UnitOfTimeSingular, UnitOfTimeSingular]
}

const Configs: Config[] = [
  { divider: 12, unitsOfTime: ["year", "month"] },
  { divider: 24, unitsOfTime: ["day", "hour"] },
  { divider: 60, unitsOfTime: ["minute", "second"] },
]

type ExpirationTimeResult = {
  timeLeft: string
  color: string
  year: number
  month: number
  day: number
  hour: number
  minute: number
  second: number
}
