import React from 'react'
import { Link, Text, Flex } from 'rebass'
import styled from '@emotion/styled'

interface Props {
  currentPage: number
  totalPages: number
  pathPrefix: string
}

const PageNumber = styled(Text)`
  color: ${(props: { isCurrentPage: boolean }) =>
    props.isCurrentPage ? 'rgb(21, 101, 192)' : 'rgba(128, 128, 128)'};
  transition: color 0.1s ease-in-out;
  font-family: Kanit, sans-serif;
  font-weight: 400;
  :hover {
    color: rgb(255, 165, 0);
  }
`

export default ({ currentPage, totalPages, pathPrefix }: Props) => {
  const startPage = Math.max(1, currentPage - 2)
  const endPage = Math.min(totalPages, currentPage + 2)

  const pages: JSX.Element[] = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => {
      const page = startPage + i
      return (
        <Link href={page === 1 ? pathPrefix : `${pathPrefix}/${page}`}>
          <PageNumber mx={3} isCurrentPage={page === currentPage}>
            {page}
          </PageNumber>
        </Link>
      )
    }
  )

  return <Flex justifyContent="center" mt={2}>{pages}</Flex>
}
