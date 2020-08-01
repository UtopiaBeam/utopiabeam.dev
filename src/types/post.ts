import { FluidObject } from 'gatsby-image'

export interface Post {
  title: string
  slug: string
  featured: boolean
  description: string
  publishedAt: string
  banner: {
    fluid: FluidObject
  }
  content: {
    childMarkdownRemark: {
      html: string
    }
  }
  tags: {
    name: string
    slug: string
  }[]
}
