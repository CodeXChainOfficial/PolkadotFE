import { getNumsFromStr } from "utils/getNumFromStr"
import { describe, it, expect } from "vitest"

describe("getNumsFromStr()", () => {
  it("should return numbers in a string in the right order", () => {
    const result = getNumsFromStr("12akskd34ksks8")

    expect(result).toEqual(expect.arrayContaining([12, 34, 8]))
  })

  it("should return floating numbers also", () => {
    let result = getNumsFromStr("12.1333akskd34ksks8")
    expect(result).toEqual(expect.arrayContaining([12.1333, 34, 8]))

    result = getNumsFromStr("12r8.1")
    expect(result).toEqual(expect.arrayContaining([12, 8.1]))

    result = getNumsFromStr("12m8.1m1.1")
    expect(result).toEqual(expect.arrayContaining([12, 8.1, 1.1]))
  })

  it("should return an empty array if no match was found", () => {
    const result = getNumsFromStr("kakakakakka")

    expect(result).toEqual([])
  })
})
