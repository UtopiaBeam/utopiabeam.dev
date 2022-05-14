export interface CallApiVariables {
  preview: boolean
  [k: string]: unknown
}

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
    id: string
    firstPublishedAt: string
  }
  banner: Asset
  content: string
  tagsCollection: {
    items: {
      name: string
    }[]
  }
}

export interface GetPostsFetchResult {
  data: {
    postCollection: {
      items: Post[]
    }
  }
}

export interface Experience {
  sys: {
    id: string
  }
  title: string
  startDate: string
  endDate?: string
  description: string
  url?: string
}

export interface Experiences {
  works: Experience[]
  educations: Experience[]
}

export interface GetExperiencesFetchResult {
  data: {
    works: {
      items: Experience[]
    }
    educations: {
      items: Experience[]
    }
  }
}
