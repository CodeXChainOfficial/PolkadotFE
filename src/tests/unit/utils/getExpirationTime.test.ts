import { getExpirationTime } from "utils/getExpirationTime"
import { it, expect, describe, beforeEach } from "vitest"

describe("getExpirationTime()", () => {
  let expiresAt = 0

  let config = {
    month: 0,
    day: 0,
    year: 0,
  }

  const reset = () => {
    // const now = new Date("August 15, 2023 13:55:55")
    const now = new Date()

    config.month = now.getMonth() + 1
    config.day = now.getDate()
    config.year = now.getFullYear()
  }

  const exec = () => {
    let { month, day, year } = config

    month = month % 12

    const date = new Date(`${month} ${day}, ${year}`)

    expiresAt = date.getTime() / 1000
  }

  beforeEach(reset)

  it("should return --- if input is invalid", () => {
    const result = getExpirationTime(expiresAt)
    expect(result.timeLeft).toBe("---")
  })

  it("should return 'expired' if there's no more time left", () => {
    exec()
    let result = getExpirationTime(expiresAt)
    expect(result.timeLeft).toBe("expired")
  })

  it("should return time left if input is valid", () => {
    config.year = config.year + 1

    exec()

    let result = getExpirationTime(expiresAt)
    expect(result.timeLeft).toBe("11 months")

    reset()

    config.year = config.year + 2

    exec()

    result = getExpirationTime(expiresAt)
    expect(result.timeLeft).toBe("1 year 11 months")

    reset()

    config.month = config.month + 1
  })
})
