import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Posts from '../components/posts'
import SEO from '../components/seo'
import { getPosts, Post } from '../utils'

interface Props {
  posts: Post[]
}

const Index: NextPage<Props> = props => {
  const { posts } = props

  return (
    <>
      <SEO />
      <h2 className="font-mono dark:text-gray-200">RECENT POSTS</h2>
      <div className="block lg:hidden">
        <Posts posts={posts.slice(0, 2)} />
      </div>
      <div className="hidden lg:block">
        <Posts posts={posts} />
      </div>
      <div className="flex justify-end">
        <Link href="/blog">
          <a className="dark:text-blue-500 dark:hover:text-orange cursor-pointer font-mono text-xl">
            {`See more \u27f6`}
          </a>
        </Link>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ctx => {
  const posts = await getPosts(ctx.preview, { limit: 3 })

  return { props: { posts } }
}

export default Index
