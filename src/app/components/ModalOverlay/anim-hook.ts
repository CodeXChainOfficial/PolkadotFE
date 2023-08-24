import { RefObject, useEffect, useRef, useState } from "react"
import gsap from "gsap"

type Animation = gsap.core.Timeline

export const useMOAnim = (ref: RefObject<HTMLDivElement>, reveal = false) => {
  const [canUnmount, setCanUnmount] = useState(true)

  const animRef = useRef<Animation | undefined>(undefined)

  const shouldUnmount = reveal ? false : canUnmount

  const handleCanUnmount = () => {
    setCanUnmount(true)
  }

  useEffect(() => {
    const parent = ref.current

    if (!parent) return

    const child = parent.children[0]

    if (reveal) {
      setCanUnmount(false) // Don't unmount immediately `reveal` is false.

      const tl = gsap.timeline({ onReverseComplete: handleCanUnmount }) // Now you can unmount.

      animRef.current = tl

      gsap.set(parent, { opacity: 0 })
      gsap.set(child, { opacity: 0, y: 100 })

      tl.to(parent, { opacity: 1, duration: 0.2 })
      tl.to(child, {
        y: 0,
        opacity: 1,
        ease: "power1",
        duration: 0.2,
      })
    } else {
      animRef.current?.reverse()
    }
  }, [ref, reveal])

  return shouldUnmount
}
