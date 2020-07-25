import React from 'react'
import { Box } from 'rebass'

interface Props {
  text: string
}

export default ({ text }: Props) => {
  return (
    <Box
      sx={{
        display: 'inline-block',
        color: 'rgb(245, 245, 245)',
        bg: 'rgb(21, 101, 192)',
        mr: 2,
        px: 2,
        py: 3 / 4,
        borderRadius: 9999,
        fontSize: [13],
        fontFamily: 'Kanit, sans-serif',
        fontWeight: 300,
        letterSpacing: 1
      }}
    >
      {text.toLocaleUpperCase()}
    </Box>
  )
}
