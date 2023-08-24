import { TabStylesConfig } from "app/components/Tabs/types"
import { CssVariables } from "styles/glob-styles"
import { ManageProfileDetails } from "./ManageProfileDetails"
import { Subdomains } from "./Subdomains"

export const OwnedByMeContents = [ManageProfileDetails, Subdomains]

export function getTabConfig() {
  const list = [
    { value: 0, label: "Manage Domain Details" },
    { value: 1, label: "Subdomains" },
  ]

  const tabStyle: TabStylesConfig = {
    default: {
      type: "16m24",
      bg: "transparent",
      color: CssVariables.Neutral400,
    },
    selected: { bg: CssVariables.Green5, color: CssVariables.Black3 },
  }

  return { list, tabStyle }
}
