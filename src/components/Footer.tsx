import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Flex, Text, Link, Box } from 'rebass'
import styled from '@emotion/styled'

const NavText = ({ children }) => (
  <Text
    fontFamily="Kanit, sans-serif"
    fontSize={[14, 15, 16]}
    fontWeight={300}
    color="rgba(250, 250, 250, 0.7)"
  >
    {children}
  </Text>
)

const NavLink = styled(Link)`
  text-decoration: none;
  color: rgba(250, 250, 250, 0.7);

  :hover {
    color: rgb(255, 165, 0);
  }
`

export default () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          fbUrl
          githubUrl
          linkedInUrl
        }
      }
    }
  `)

  const socialLinks = [
    {
      text: 'Facebook',
      href: siteMetadata.fbUrl,
    },
    {
      text: 'GitHub',
      href: siteMetadata.githubUrl,
    },
    {
      text: 'LinkedIn',
      href: siteMetadata.linkedInUrl,
    },
  ]

  const socialComponents = socialLinks.map((link, i) => (
    <React.Fragment key={`footer_${i}`}>
      {` · `}
      <NavLink href={link.href} target="_blank">
        {link.text}
      </NavLink>
    </React.Fragment>
  ))

  return (
    <Flex
      flexWrap="wrap"
      justifyContent="center"
      backgroundColor="rgb(10, 10, 10)"
      p={3}
    >
      <NavText>
        {siteMetadata.author} © {new Date().getFullYear()}
        {socialComponents}
      </NavText>
    </Flex>
  )
}
