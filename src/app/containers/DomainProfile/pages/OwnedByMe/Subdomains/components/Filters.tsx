import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { Dropdown } from "./Dropdown"

export const Filters = () => {
  return <Dropdown label="Filters" startIcon={<FontAwesomeIcon icon="fa-solid fa-filter" />} />
}
