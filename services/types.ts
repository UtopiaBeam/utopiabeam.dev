export interface Asset {
  url: string
  width: number
  height: number
}

export interface Post {
  title: string
  slug: string
  description: string
  publishedAt: Date
  banner: Asset
  content: string
}
