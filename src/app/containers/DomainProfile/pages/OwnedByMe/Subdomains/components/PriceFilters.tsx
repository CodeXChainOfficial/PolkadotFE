import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { Dropdown } from "./Dropdown"

export const PriceFilters = () => {
  return (
    <Dropdown label="Price: Highest price" startIcon={<FontAwesomeIcon icon="fa-solid fa-bars-sort" />} mr="auto" />
  )
}
