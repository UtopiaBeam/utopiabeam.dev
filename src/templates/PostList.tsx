import React from 'react'
import { graphql } from 'gatsby'
import { Post } from '../types'
import SEO from '../components/SEO'
import PostCard from '../components/PostCard'
import { Flex, Box } from 'rebass'

interface Props {
  pageContext: {
    currentPage: number
    pageNum: number
    skip: number
    limit: number
  }
  data: {
    allContentfulPost: {
      nodes: Post[]
    }
  }
}

export default ({ data }: Props) => {
  const postCards = data.allContentfulPost.nodes.map(post => (
    <PostCard {...post} />
  ))

  return (
    <>
      <SEO title="Blog" />
      <Flex justifyContent="center">
        <Box width={[20 / 24, 19 / 24, 18 / 24, 17 / 24]}>
          <Flex flexWrap="wrap">{postCards}</Flex>
        </Box>
      </Flex>
    </>
  )
}

export const pageQuery = graphql`
  query postListQuery($skip: Int!, $limit: Int!) {
    allContentfulPost(
      sort: { fields: createdAt, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      nodes {
        title
        slug
        description
        createdAt(formatString: "DD MMM YYYY")
        banner {
          fluid(quality: 80, maxWidth: 1000) {
            aspectRatio
            base64
            sizes
            src
            srcSet
            srcSetWebp
            srcWebp
            tracedSVG
          }
        }
        content {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
