import Link from 'next/link'

interface Props {
  current: number
  total: number
}

const Pagination: React.FC<Props> = ({ current, total }) => {
  const start = Math.max(current - 2, 1)
  const end = Math.min(current + 2, total)

  const pages = Array.from({ length: end - start + 1 }, (_, i) => {
    const page = start + i

    return (
      <Link
        key={`page-${page}`}
        href={page === 1 ? '/blog' : `/blog/page/${page}`}
      >
        <a
          className={`dark:${
            page === current ? 'text-blue-500' : 'text-gray-500'
          } dark:hover:text-orange cursor-pointer`}
        >
          {page}
        </a>
      </Link>
    )
  })

  return <div className="flex justify-center space-x-8">{pages}</div>
}

export default Pagination
