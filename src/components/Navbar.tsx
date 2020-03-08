import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link, Text, Flex, Box } from 'rebass'
import { useStaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

interface Props {
  children?: ReactNode
}

const NavLink = styled(Link)`
  text-decoration: none;
`

const NavText = styled(Text)`
  font-family: Catamaran, sans-serif;
  font-weight: 600;
`

const Btn = styled.div`
  color: rgba(18, 18, 18, 0.7);
  transition: color 0.1s ease-in-out;

  &:hover {
    color: rgba(255, 165, 0, 0.8);
  }

  @media (prefers-color-scheme: dark) {
    color: rgba(250, 250, 250, 0.7);
  }
`

const NavFlex = styled(Flex)`
  background: transparent;
`

export default ({ children }: Props) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          fbUrl
          githubUrl
          linkedInUrl
        }
      }
    }
  `)

  const tabs = [
    {
      name: 'Blog',
      href: '/blog',
    },
    {
      name: 'About me',
      href: '/me',
    },
  ]

  const navTabs = tabs.map(tab => (
    <NavLink href={tab.href} px={[3, 4]} fontSize={[14, 15]}>
      <Btn>
        <NavText>{tab.name.toUpperCase()}</NavText>
      </Btn>
    </NavLink>
  ))

  const socialLinks = [
    {
      icon: faFacebook,
      href: siteMetadata.fbUrl,
    },
    {
      icon: faGithub,
      href: siteMetadata.githubUrl,
    },
    {
      icon: faLinkedin,
      href: siteMetadata.linkedInUrl,
    },
  ]

  const socialBtns = socialLinks.map(link => (
    <Box px={3}>
      <a href={link.href} target="_blank">
        <Btn>
          <FontAwesomeIcon icon={link.icon} size="lg" />
        </Btn>
      </a>
    </Box>
  ))

  return (
    <>
      <NavFlex alignItems="center" py={3}>
        {navTabs}
        <Box mx="auto" />
        {socialBtns}
      </NavFlex>
      {children}
    </>
  )
}
