import React from 'react'
import { Heading, Flex } from 'rebass'

export default () => {
  return (
    <Heading
      textAlign="center"
      fontFamily="Space Mono, monospace"
      fontWeight={700}
      fontSize={[36, 48, 60]}
      color="#ffffff"
      mb={[4, 5]}
      mt={5}
    >
      <Flex>
        <div style={{ color: 'rgb(255, 165, 0)' }}>{'{'}</div>
        UtopiaBeam
        <div style={{ color: 'rgb(255, 165, 0)' }}>{'}'}</div>
      </Flex>
    </Heading>
  )
}
