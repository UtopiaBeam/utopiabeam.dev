export interface Asset {
  url: string
  width: number
  height: number
}

export interface Post {
  title: string
  slug: string
  description: string
  sys: {
    firstPublishedAt: string
  }
  banner: Asset
  content: string
  tagCollection: {
    items: {
      name: string
    }
  }
}

export interface CallApiVariables {
  preview: boolean
  [k: string]: unknown
}

export interface GetPostsFetchResult {
  data: {
    postCollection: {
      items: Post[]
    }
  }
}
