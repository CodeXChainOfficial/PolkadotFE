import { css } from "@emotion/react"
import { ButtonSize } from "../types"

export const getSize = (size?: ButtonSize) => {
  const sizeProps = sizes[size ?? "lg"]

  return css`
    height: ${sizeProps.height};
    padding: ${sizeProps.padding};
  `
}

type SizeProps = {
  width: string
  height: string
  padding: string
}

const sizes: Record<ButtonSize, SizeProps> = {
  lg: {
    width: "162px",
    height: "56px",
    padding: "16px 40px",
  },
  md: {
    width: "121px",
    height: "40px",
    padding: "10px 16px",
  },
  sm: {
    width: "113px",
    height: "32px",
    padding: "10px 12px",
  },
  xs: {
    width: "92px",
    height: "24px",
    padding: "10px 8px",
  },
}
