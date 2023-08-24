import { describe, it, expect } from "vitest"
import { media, sizes } from "../media"

describe("media", () => {
  type Key = keyof typeof sizes

  it("should return media query in css", () => {
    const label: Key = "sm"

    const mediaQuery = media[label]

    expect(mediaQuery).toBe(`@media (max-width: ${sizes[label]}px)`)
  })
})
