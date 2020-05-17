import React from 'react'
import { Heading, Flex } from 'rebass'
import styled from '@emotion/styled'

interface Props {
  sm?: boolean
}

const LogoFlex = styled(Flex)`
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
`

export default ({ sm }: Props) => {
  return (
    <Heading
      textAlign="center"
      fontFamily="Space Mono, monospace"
      fontWeight={700}
      fontSize={sm ? [22, 23, 24] : [36, 48, 60]}
      color="#ffffff"
      mb={sm ? 0 : [4, 5]}
      mt={sm ? 0 : 5}
      px={sm ? [3, 4] : 0}
    >
      <LogoFlex>
        <div style={{ color: 'rgb(255, 165, 0)' }}>{'{'}</div>
        {sm ? null : 'UtopiaBeam'}
        <div style={{ color: 'rgb(255, 165, 0)' }}>{'}'}</div>
      </LogoFlex>
    </Heading>
  )
}
