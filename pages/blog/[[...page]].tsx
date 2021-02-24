import { GetStaticPaths, GetStaticProps } from 'next'
import { getPosts, Post } from '../../services'
import Posts from '../../components/posts'
import Pagination from '../../components/pagination'
import SEO from '../../components/seo'

interface Props {
  posts: Post[]
  page: number
  totalPage: number
}

const Page: React.FC<Props> = ({ posts, page, totalPage }) => {
  return (
    <>
      <SEO title="Blog" />
      <h2 className="dark:text-gray-200">ALL POSTS</h2>
      <Posts posts={posts} />
      <Pagination current={page} total={totalPage} />
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ctx => {
  const { params, preview = false } = ctx
  const page = Number(params.page?.[0] ?? 1)

  const allPosts = await getPosts(preview)
  const posts = allPosts.slice(6 * (page - 1), 6 * page)
  const totalPage = Math.ceil(allPosts.length / 6)

  return { props: { posts, page, totalPage } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts()

  const pageCount = Math.ceil(posts.length / 6)

  return {
    paths: Array.from({ length: pageCount }, (_, page) => ({
      params: { page: page === 0 ? [] : [(page + 1).toString()] },
    })),
    fallback: false,
  }
}

export default Page
