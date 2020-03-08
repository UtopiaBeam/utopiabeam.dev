import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SEO from '../components/SEO'
import Logo from '../components/Logo'
import BackgroundImage from 'gatsby-background-image'
import { Heading, Flex } from 'rebass'

export default () => {
  const { site, imageSharp } = useStaticQuery(graphql`
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
    }
  `)
  return (
    <>
      <SEO />
      <BackgroundImage fluid={imageSharp.fluid}>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Logo />
          <Heading
            textAlign="center"
            fontFamily="Catamaran, sans-serif"
            fontWeight={400}
            fontSize={[18, 22, 26]}
            letterSpacing={2}
            color="rgba(250, 250, 250, 0.8)"
            mx={[3, 4, 5]}
            mb={5}
          >
            {site.siteMetadata.description}
          </Heading>
        </Flex>
      </BackgroundImage>
    </>
  )
}
