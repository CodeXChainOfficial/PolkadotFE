import { CssVariables } from "styles/glob-styles"
import { FontAwesomeIcon } from "./FontAwesomeIcon"

export const Loader = () => {
  return (
    <FontAwesomeIcon
      icon="fa-duotone fa-spinner"
      spin
      size="10x"
      color={CssVariables.Green500}
      style={{ position: "absolute" }}
    />
  )
}
