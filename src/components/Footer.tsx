import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Flex, Text, Link } from 'rebass'
import styled from '@emotion/styled'

const NavText = (props: { children?: React.ReactNode }) => (
  <Text
    fontFamily="Kanit, sans-serif"
    fontSize={[14, 15, 16]}
    fontWeight={300}
    color="rgba(250, 250, 250, 0.7)"
  >
    {props.children}
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
      <NavLink href={link.href} target="_blank">
        {link.text}
      </NavLink>
      {i < socialLinks.length - 1 ? ' · ' : null}
    </React.Fragment>
  ))

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="rgb(10, 10, 10)"
      px={6}
      py={4}
    >
      <NavText>
        {siteMetadata.author} © {new Date().getFullYear()}
      </NavText>
      <NavText>{socialComponents}</NavText>
    </Flex>
  )
}
