export interface UserData {
  imageUrl: string
  name: string
  username: string
  description: string
  address: {
    location: string
    website: string
    twitter?: string
    github?: string
    telegram?: string
    facebook?: string
    youtube?: string
    discord?: string
    twitch?: string
  }
  wallets: Wallet[]
}

export interface Wallet {
  walletImageUrl: string
  address: string
  walletType: string
}
