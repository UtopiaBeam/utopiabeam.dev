import React from 'react'
import { graphql } from 'gatsby'
import { Post } from '../types'
import SEO from '../components/SEO'
import PostCard from '../components/PostCard'
import { Flex, Box, Heading } from 'rebass'
import styled from '@emotion/styled'
import PageNav from '../components/PageNav'

interface Props {
  pageContext: {
    currentPage: number
    totalPages: number
    skip: number
    limit: number
  }
  data: {
    allContentfulPost: {
      nodes: Post[]
    }
  }
}

const Title = styled(props => (
  <Heading
    {...props}
    fontFamily="Kanit, sans-serif"
    fontWeight={700}
    fontSize={[32, 36, 40]}
    py={2}
  />
))`
  @media (prefers-color-scheme: dark) {
    color: rgb(245, 245, 245);
  }
`

export default ({ pageContext, data }: Props) => {
  const { currentPage, totalPages } = pageContext
  const postCards = data.allContentfulPost.nodes.map(post => (
    <PostCard {...post} />
  ))

  return (
    <>
      <SEO title="Blog" />
      <Flex justifyContent="center">
        <Box width={[20 / 24, 19 / 24, 18 / 24, 17 / 24]} pt={4}>
          <Title>Blog</Title>
          <Flex flexWrap="wrap">{postCards}</Flex>
          <PageNav
            currentPage={currentPage}
            totalPages={totalPages}
            pathPrefix="/blog"
          />
        </Box>
      </Flex>
    </>
  )
}

export const pageQuery = graphql`
  query postListQuery($skip: Int!, $limit: Int!) {
    allContentfulPost(
      sort: { fields: updatedAt, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      nodes {
        title
        slug
        description
        updatedAt(formatString: "DD MMM YYYY")
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
