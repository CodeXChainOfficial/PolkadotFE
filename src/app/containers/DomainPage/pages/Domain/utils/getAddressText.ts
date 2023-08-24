import { CssVariables } from "styles/glob-styles"

export const getAddressText = (
  domainName,
  isAvailable: boolean,
  isYours: boolean,
): { title: string; subTitle: string; color: string } => {
  if (isYours) {
    return {
      title: `${domainName} is Yours!`,
      subTitle: "This domain has already been added to your domains.",
      color: CssVariables.Purple,
    }
  }

  if (isAvailable) {
    return {
      title: `${domainName} is available!`,
      subTitle: "Register it now to claim your identity.",
      color: CssVariables.Green3,
    }
  }

  return {
    title: `${domainName} is Taken!`,
    subTitle: "This domain has already been purchased.",
    color: CssVariables.Red1,
  }
}
