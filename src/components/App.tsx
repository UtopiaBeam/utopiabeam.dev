import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import { css } from '@emotion/core'

interface Props {
  children?: ReactNode
}

export default ({ children }: Props) => {
  return (
    <div
      css={css`
        background-color: rgb(250, 250, 250);
        @media (prefers-color-scheme: dark) {
          background-color: rgb(18, 18, 18);
        }
      `}
    >
      <Navbar />
      {children}
    </div>
  )
}
