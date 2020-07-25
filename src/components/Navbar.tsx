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
import Logo from './Logo'

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

const Button = styled.div`
  color: rgba(250, 250, 250, 0.7);
  transition: color 0.15s ease-in-out;

  &:hover {
    color: rgba(255, 165, 0, 0.8);
  }
`

const NavFlex = styled(Flex)`
  background-color: rgb(25, 25, 25);
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
  ]

  const navTabs = tabs.map((tab, i) => (
    <NavLink key={`tab/${i}`} href={tab.href} px={[3, 4]} fontSize={[14, 15]}>
      <Button>
        <NavText>{tab.name.toUpperCase()}</NavText>
      </Button>
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

  const socialButtons = socialLinks.map((link, i) => (
    <Box key={`social_${i}`} px={3}>
      <a href={link.href} target="_blank">
        <Button>
          <FontAwesomeIcon icon={link.icon} size="lg" />
        </Button>
      </a>
    </Box>
  ))

  return (
    <>
      <NavFlex alignItems="center" py={3}>
        <NavLink href="/">
          <Logo sm={true} />
        </NavLink>
        {navTabs}
        <Box mx="auto" />
        {socialButtons}
      </NavFlex>
      {children}
    </>
  )
}
