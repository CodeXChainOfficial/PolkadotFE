import { MouseEvent } from "react"

export const handleTabScrollOnSelect = (e: MouseEvent) => {
  const parent = e.currentTarget as HTMLDivElement
  const target = e.target as HTMLDivElement

  const remainingSpace = parent.clientWidth - target.offsetWidth
  const spaceLeftAndRight = remainingSpace / 2

  parent.scroll({
    left: target.offsetLeft - spaceLeftAndRight,
    behavior: "smooth",
  })
}
