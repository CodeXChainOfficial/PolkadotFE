import { describe, it, test, expect } from "vitest"
import { addressMinimizer, suffixName, queryStringer } from "utils/formatters"

describe("queryStringer()", () => {
  it("should return an empty string if input is an empty object", () => {
    expect(queryStringer({})).toBe("")
  })

  it("should correctly stringify query parameters", () => {
    expect(queryStringer({ name: "james", age: 1 })).toBe("?name=james&age=1")
  })

  it("should return query string without ampersand if input is an object with only one key", () => {
    expect(queryStringer({ name: "james" })).toBe("?name=james")
  })
})

describe("addressMinimizer()", () => {
  it("should return an empty string if input is falsy or not a string", () => {
    let result = [addressMinimizer(""), addressMinimizer(), addressMinimizer({} as any), addressMinimizer([] as any)]

    expect(result).toEqual(expect.arrayContaining(["", "", "", ""]))
  })

  it("should return the same input if it is less than expected maximum characters", () => {
    const result = addressMinimizer("mini", { maxChar: 8 })

    expect(result).toBe("mini")
  })

  it("should have 3 dots (...) as default seperator", () => {
    const result = addressMinimizer("minimizet888788jjhhgfggghisaddress")

    expect(result).toContain("...")
  })

  it("should return 12 chars (excluding seperator) by default", () => {
    const result = addressMinimizer("minimizet888788jjhhgfggghisaddress")

    expect(result.replace("...", "").length).toBe(12)
  })

  it("should correctly minimize input and return a string with one half from start of the input, other half from end of the input, and a separator inbetween the halfs", () => {
    const result = addressMinimizer("minimizet888788jjhhgfggghisaddress")

    expect(result).toBe("minimi...ddress")
  })

  it("should accept and use a maxChar if provided", () => {
    const result = addressMinimizer("minimizet888788jjhhgfggghisaddress", {
      maxChar: 20,
    })

    expect(result).toBe("minimizet8...hisaddress")
  })

  it("should accept and use a separator if provided", () => {
    const result = addressMinimizer("minimizet888788jjhhgfggghisaddress", {
      seperator: "****",
    })

    expect(result).toBe("minimi****ddress")
  })
})

describe("suffixName()", () => {
  it("should correctly suffix a domain name with .mvx", () => {
    expect(suffixName("james")).toBe("james.mvx")
  })

  test("output should have only one .mvx suffix", () => {
    expect(suffixName("james.mvx")).toBe("james.mvx")
  })

  it("should not add .mvx suffix to a falsy input", () => {
    expect(suffixName("")).toBe("")
  })
})
