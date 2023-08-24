import { i18n, translations } from "../i18n"
import { describe, it, expect } from "vitest"

describe("i18n", () => {
  it("should initate i18n", async () => {
    const t = await i18n
    expect(t).toBeDefined()
  })

  it("should initate i18n with translations", async () => {
    const t = await i18n

    //@ts-ignore ignored because of typeCheck :))
    const result = t(translations.test)

    expect(result.length).toBeGreaterThan(0)
  })
})
