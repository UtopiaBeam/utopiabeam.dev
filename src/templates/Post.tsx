import React from 'react'
import { graphql } from 'gatsby'
import { Post } from '../types'
import SEO from '../components/SEO'
import { Flex, Box, Heading, Link } from 'rebass'
import { Global, css } from '@emotion/core'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { getDateString, useMobile } from '../utils'
import Chip from '../components/Chip'

interface Props {
  pageContext: {
    slug: string
    previousSlug: string
    nextSlug: string
  }
  data: {
    post: Post
    previousPost: Post | null
    nextPost: Post | null
  }
}

const GlobalStyles = () => (
  <Global
    styles={css`
      a {
        text-decoration: none;
        color: rgb(44, 120, 212);
      }
      p {
        color: rgb(20, 20, 20);
        @media only screen and (max-width: 420px) {
          font-size: 18px;
        }
        @media (prefers-color-scheme: dark) {
          color: rgba(230, 230, 230);
        }
        & > img {
          display: block;
          margin: 0 auto;
        }
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        @media (prefers-color-scheme: dark) {
          color: rgba(230, 230, 230);
        }
      }
      hr {
        @media (prefers-color-scheme: dark) {
          background: rgba(200, 200, 200, 0.5);
        }
      }
      ul > li,
      ol > li {
        color: rgb(20, 20, 20);
        @media only screen and (max-width: 420px) {
          font-size: 18px;
        }
        @media (prefers-color-scheme: dark) {
          color: rgba(230, 230, 230);
        }
      }
      pre[class*='language-'] {
        border-radius: 5px;
        margin-bottom: 34px;

        & > code {
          font-size: 14px;

          @media only screen and (max-width: 420px) {
            font-size: 13px;
          }
        }
      }
      :not(pre) > code {
        font-size: 18px;

        @media only screen and (max-width: 420px) {
          font-size: 17px;
        }
      }
      .katex-html {
        overflow-x: scroll;
        @media (prefers-color-scheme: dark) {
          color: rgba(230, 230, 230);
        }
      }
      blockquote {
        font-size: 1.2em;
        padding: 0 1.5em;
        border-left: 0.3em solid rgba(44, 120, 212, 0.6);
        @media (prefers-color-scheme: dark) {
          border-left: 0.3em solid rgba(44, 120, 212, 0.8);
        }
        @media only screen and (max-width: 420px) {
          padding: 0 0.75em;
          margin-left: 0;
          margin-right: 0;
        }
      }
      table {
        table-layout: fixed;
        & > tbody {
          font-size: 0.85em;
        }
        @media (prefers-color-scheme: dark) {
          color: rgba(230, 230, 230);
        }
      }
    `}
  />
)

const Title = styled(props => (
  <Heading
    {...props}
    fontFamily="Kanit, sans-serif"
    fontWeight={700}
    fontSize={[36, 40, 44]}
    pb={2}
  />
))`
  @media (prefers-color-scheme: dark) {
    color: rgb(245, 245, 245);
  }
`

const UpdatedAt = styled(props => (
  <Heading
    {...props}
    fontFamily="Kanit, sans-serif"
    fontWeight={400}
    fontSize={[16, 17, 18]}
    color="rgba(40, 40, 40, 0.5)"
    pb={4}
  />
))`
  @media (prefers-color-scheme: dark) {
    color: rgba(245, 245, 245, 0.5);
  }
`

const PostLink = styled(Link)`
  text-decoration: none;
  color: rgb(21, 101, 192);
  @media (prefers-color-scheme: dark) {
    color: rgb(44, 120, 212);
  }
  :hover {
    color: rgb(255, 165, 0);
  }
`

export default ({ data }: Props) => {
  const { post, nextPost, previousPost } = data
  const tags = post.tags.map(tag => <Chip text={tag.name} />)
  const isMobile = useMobile()

  return (
    <>
      <GlobalStyles />
      <SEO
        title={post.title}
        slug={post.slug}
        description={post.description}
        date={post.updatedAt}
        banner={post.banner.fluid.src}
      />
      <Flex flexDirection="column" alignItems="center">
        <Box width={[4 / 5, 3 / 4, 1 / 2]} pt={4}>
          <Title>{post.title}</Title>
          <Box mb={3}>{tags}</Box>
          <UpdatedAt>โพสเมื่อ {getDateString(post.updatedAt)}</UpdatedAt>
          <Img fluid={post.banner.fluid} alt="banner" />
          <Box py={4}>
            <div
              dangerouslySetInnerHTML={{
                __html: post.content.childMarkdownRemark.html!,
              }}
            />
          </Box>
        </Box>
        <Box width={[4 / 5, 3 / 4, 2 / 3]}>
          <hr
            css={{
              borderStyle: 'double',
              borderLeft: 0,
              borderRight: 0,
            }}
          />
          <Flex
            justifyContent="space-between"
            flexDirection={isMobile ? 'column' : 'row'}
          >
            {previousPost ? (
              <PostLink
                href={`/blog/${previousPost.slug}`}
                pb={4}
                pr={4}
              >{`<< ${previousPost.title}`}</PostLink>
            ) : null}
            {nextPost ? (
              <PostLink
                href={`/blog/${nextPost.slug}`}
                pb={4}
                pl={4}
              >{`${nextPost.title} >>`}</PostLink>
            ) : null}
          </Flex>
        </Box>
      </Flex>
    </>
  )
}

export const pageQuery = graphql`
  query postQuery($slug: String!, $previousSlug: String, $nextSlug: String) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      description
      updatedAt
      content {
        childMarkdownRemark {
          html
        }
      }
      banner {
        fluid(maxWidth: 1000, quality: 80) {
          ...GatsbyContentfulFluid
        }
      }
      tags {
        name
        slug
      }
    }
    previousPost: contentfulPost(slug: { eq: $previousSlug }) {
      title
      slug
    }
    nextPost: contentfulPost(slug: { eq: $nextSlug }) {
      title
      slug
    }
  }
`
