export * from "./image-refs"

/* eslint-disable */
export enum AppPages {
  RootPage = "/",
  SearchPage = "/search",
  FaqsPage = "/faqs",
  LoginPage = "/login",
  DomainPage = "/domains",
  MyAccountPage = "/me",
  SettingsPage = "/settings",
  UnlockPage = "/unlock",
  MarketPlacePage = "/market",
  Playground = "/playground",
  ManageDomainPage = "/manage",
  DomainProfile = "/domain-profile",
  // [INSERT NEW PAGE PATH ABOVE] < Needed for generating containers seamlessly
}

export enum DomainTabs {
  Register = "register",
  Details = "details",
  Subdomains = "subdomains",
  Auction = "auction",
}

export const DomainProfilePages = {
  Root: `${AppPages.DomainProfile}/ownedByMe`,
  OwnedByMe: `${AppPages.DomainProfile}/ownedByMe`,
  ThirdParty: `${AppPages.DomainProfile}/thirdparty`,
} as const

export const SidebarWidth = 280

export const PageableParams = {
  page: 1,
  size: 12,
  maxSize: 20,
  minSize: 1,
}

export const notSupportedCharacters = ["#", `\\`, "/", "?", ".", " "]

export const NameSuffix = ".mvx"
