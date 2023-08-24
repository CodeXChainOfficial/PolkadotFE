import { DomainType } from "app/types"
import { multiply } from "precise-math"

type GetPriceToPayProps = Partial<Pick<DomainType, "priceEgld" | "priceUsd" | "duration">>

export const getPriceToPay = ({ priceEgld, priceUsd, duration = 1 }: GetPriceToPayProps) => {
  return {
    wegldPrice: priceEgld ? multiply(priceEgld, duration, 10e-18) : 0,
    usdPrice: priceUsd ? (priceUsd * duration).toFixed(2) : 0,
  }
}
