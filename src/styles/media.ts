/*
 * Media queries utility
 */

// Update your breakpoints if you want
export const sizes = {
  /** 280px */
  xxs: 280,

  /** 360px */
  xs: 360,

  /** 700px */
  sm: 700,

  /** 960px */
  md: 960,

  /** 1280px */
  lg: 1280,

  /** 1920px */
  xl: 1920,
}

// For CSS
export const media = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce(
  (acc, label) => {
    acc[label] = `@media (max-width: ${sizes[label]}px)`

    return acc
  },
  {} as { [K in keyof typeof sizes]: string },
)

/**
 * How to use,
 *
 * import {media} from '...'
 *
 * ---> CSS
 * const Element = styled.div`
 *
 * ${media.sm} {
 *    ...
 * }
 *
 * `
 */

export type DeviceBoolean = Record<keyof Omit<typeof sizes, "xxs">, boolean>

export enum AnimationMedia {
  md = "(max-width: 1023px)",

  lg_only = "(min-width: 1024px)",
  md_only = "(min-width: 768px) and (max-width: 1023px)",
  sm_only = "(max-width: 767px)",

  no_pref = "(prefers-reduced-motion: no-preference)",
}
