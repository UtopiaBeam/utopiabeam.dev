import React from 'react'
import styled from '@emotion/styled'
import { Card, Heading, Box, Link, Text } from 'rebass'
import { Project } from '../types'
import { Global, css } from '@emotion/core'

const ProjectCard = styled(Card)`
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

const ProjectName = styled(props => (
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

const ProjectDesc = styled(props => (
  <Text {...props} py={2} fontSize={[14, 16, 18]} />
))`
  color: rgb(10, 10, 10);
  @media (prefers-color-scheme: dark) {
    color: rgb(200, 200, 200);
  }
`

export default (props: Project) => {
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
        <Link href={props.url} target="_blank">
          <ProjectCard height="100%">
            <Box p={[2, 3]}>
              <ProjectName>{props.name}</ProjectName>
              <ProjectDesc>{props.description}</ProjectDesc>
            </Box>
          </ProjectCard>
        </Link>
      </Box>
    </Box>
  )
}
