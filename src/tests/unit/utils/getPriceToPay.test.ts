import { getPriceToPay } from "utils/domainUtils"
import { describe, it, expect } from "vitest"

describe("getPriceToPay()", () => {
  it("should convert price from EGLD to WEGLD price", () => {
    const prices = getPriceToPay({
      priceEgld: 10000000000000000,
      priceUsd: 0.362,
    })
    expect(prices.wegldPrice).toBe(0.1)
  })

  it("should return 0 if field(s) are falsy", () => {
    const prices = getPriceToPay({})
    expect(prices.wegldPrice).toBe(0)
  })
})
