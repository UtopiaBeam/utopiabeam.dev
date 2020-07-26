import React from 'react'
import { Post } from '../types'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { Box, Card, Link, Text, Heading } from 'rebass'
import { Global, css } from '@emotion/core'
import { getDateString } from '../utils'
import Chip from '../components/Chip'

const Banner = styled(Img)`
  border-radius: 5px 5px 0 0;
`

const PostCard = styled(Card)`
  background-color: rgb(250, 250, 250);
  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transition: transform 0.15s ease-in-out;
  a {
    text-decoration: none;
  }
  &:hover {
    transform: scale(1.01);
  }
  @media (prefers-color-scheme: dark) {
    background-color: rgb(30, 30, 30);
    box-shadow: none;
  }
`

const PostTitle = styled(props => (
  <Heading
    {...props}
    fontSize={[24, 26, 28, 30]}
    fontFamily="Kanit, sans-serif"
    fontWeight={500}
    py={3}
  />
))`
  color: rgb(10, 10, 10);
  @media (prefers-color-scheme: dark) {
    color: rgb(245, 245, 245);
  }
`

const PostDate = styled(props => (
  <Text
    {...props}
    fontSize={[14, 15, 16, 17]}
    fontFamily="Kanit, sans-serif"
    fontWeight={400}
  />
))`
  color: rgba(10, 10, 10, 0.5);
  @media (prefers-color-scheme: dark) {
    color: rgba(245, 245, 245, 0.5);
  }
`

const PostDesc = styled(props => (
  <Text {...props} py={2} fontSize={[14, 16, 18]} />
))`
  color: rgb(10, 10, 10);
  @media (prefers-color-scheme: dark) {
    color: rgb(200, 200, 200);
  }
`

export default (props: Post) => {
  const tags = props.tags.map(tag => <Chip text={tag.name} />)

  return (
    <Box width={[1, 1 / 2, 1 / 2]}>
      <Global
        styles={css`
          a {
            text-decoration: none;
          }
        `}
      />
      <Box py={3} px={[2, 3]} height="100%">
        <Link href={`/blog/${props.slug}`}>
          <PostCard height="100%">
            <Banner fluid={props.banner.fluid} />
            <Box p={3}>
              <PostTitle>{props.title}</PostTitle>
              <Box mb={3}>{tags}</Box>
              <PostDate>{getDateString(props.updatedAt)}</PostDate>
              <PostDesc>{props.description}</PostDesc>
            </Box>
          </PostCard>
        </Link>
      </Box>
    </Box>
  )
}
