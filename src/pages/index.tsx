import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import SEO from '../components/SEO'
import Banner from '../components/Banner'
import { Flex, Box, Heading, Text, Link } from 'rebass'
import PostCard from '../components/PostCard'
import styled from '@emotion/styled'
import ProjectCard from '../components/ProjectCard'

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

const SeeMore = styled(Text)`
  color: rgb(21, 101, 192);
  transition: color 0.1s ease-in-out;
  font-family: Kanit, sans-serif;
  font-weight: 400;
  :hover {
    color: rgb(255, 165, 0);
  }
`

export default () => {
  const {
    site,
    imageSharp,
    allContentfulPost,
    allContentfulProject,
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
        }
      }
      imageSharp(fluid: { src: { regex: "/bg.jpg/" } }) {
        fluid(maxWidth: 1920, maxHeight: 800, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
      allContentfulPost(sort: { fields: publishedAt, order: DESC }, limit: 2) {
        nodes {
          title
          slug
          description
          publishedAt
          tags {
            name
          }
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
      allContentfulProject(sort: { fields: updatedAt, order: DESC }, limit: 2) {
        nodes {
          name
          description
          url
        }
      }
    }
  `)

  const postCards = allContentfulPost.nodes.map(post => <PostCard {...post} />)
  const projectCards = allContentfulProject.nodes.map(project => (
    <ProjectCard {...project} />
  ))

  return (
    <>
      <SEO />
      <BackgroundImage fluid={imageSharp.fluid}>
        <Banner description={site.siteMetadata.description} />
      </BackgroundImage>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Box width={[20 / 24, 19 / 24, 18 / 24, 17 / 24]} py={4}>
          <Flex alignItems="baseline">
            <Title>Latest Blogs</Title>
            <Box mx="auto" />
            <Link href="/blog">
              <SeeMore>See all {'>'}</SeeMore>
            </Link>
          </Flex>
          <Flex flexWrap="wrap">{postCards}</Flex>
        </Box>
        <Box width={[20 / 24, 19 / 24, 18 / 24, 17 / 24]} pb={4}>
          <Title>Current Projects</Title>
          <Flex flexWrap="wrap">{projectCards}</Flex>
        </Box>
      </Flex>
    </>
  )
}
