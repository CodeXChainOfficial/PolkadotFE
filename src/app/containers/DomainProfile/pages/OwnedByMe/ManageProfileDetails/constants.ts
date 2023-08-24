import { ProfileInfo } from "./components/ProfileInfo"
import { SocialMedia } from "./components/SocialMedia"
import { Wallets } from "./components/Wallets"
import { TextRecord } from "./components/TextRecord"

export const DomainDetailTabs = [
  { name: "General", Page: ProfileInfo },
  { name: "Social Media", Page: SocialMedia },
  { name: "Text Records", Page: TextRecord },
  { name: "Wallets", Page: Wallets },
]
