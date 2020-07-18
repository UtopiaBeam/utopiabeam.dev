import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import SEO from '../components/SEO'
import Banner from '../components/Banner'
import { Flex, Box, Heading } from 'rebass'
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
      allContentfulPost(sort: { fields: updatedAt, order: DESC }, limit: 2) {
        nodes {
          title
          slug
          description
          updatedAt(formatString: "DD MMM YYYY")
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
          <Title>Latest Blogs</Title>
          <Flex flexWrap="wrap">{postCards}</Flex>
        </Box>
        <Box width={[20 / 24, 19 / 24, 18 / 24, 17 / 24]} py={4}>
          <Title>Current Projects</Title>
          <Flex flexWrap="wrap">{projectCards}</Flex>
        </Box>
      </Flex>
    </>
  )
}
