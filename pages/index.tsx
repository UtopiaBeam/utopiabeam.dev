import { GetStaticProps, NextPage } from 'next'
import Posts from '../components/posts'
import SEO from '../components/seo'
import { getPosts, Post } from '../services'

interface Props {
  posts: Post[]
}

const Index: NextPage<Props> = props => {
  const { posts } = props

  return (
    <>
      <SEO />
      <div className="flex flex-col px-4 md:px-8 lg:px-16 py-6 space-y-6 dark:bg-darkgray">
        <h1 className="dark:text-gray-200">RECENT POSTS</h1>
        <Posts posts={posts} />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ctx => {
  const posts = (await getPosts(ctx.preview)).slice(0, 6)

  return { props: { posts } }
}

export default Index
