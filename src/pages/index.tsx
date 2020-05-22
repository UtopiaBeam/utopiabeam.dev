import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import SEO from '../components/SEO'
import Banner from '../components/Banner'

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
        <Banner description={site.siteMetadata.description} />
      </BackgroundImage>
    </>
  )
}
