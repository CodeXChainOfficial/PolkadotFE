import { divide } from "precise-math"

const num = 100_000_000_000_000 // a hundred trillion
export const EGLD_To_xEGLD = (n: number): number => divide(num, Number(n))
