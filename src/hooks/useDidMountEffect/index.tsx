/**
 * It skips one render before initialzing the function
 * @param {Function} func - The function you want to run after first render.
 * @param deps - An array of dependencies that will be used to determine if the effect should be run.
 */
import { useEffect, useRef } from "react"

export const useDidMountEffect = (func: Function, deps: Array<any>) => {
  const didMount = useRef(false)

  useEffect(() => {
    let cleanup: Function | null = null

    if (didMount.current) {
      cleanup = func()
    } else {
      didMount.current = true
    }

    return () => {
      if (cleanup) cleanup()
    }
  }, deps)
}
