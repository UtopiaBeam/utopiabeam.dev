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
      <h2 className="font-mono dark:text-gray-200">RECENT POSTS</h2>
      <Posts posts={posts} />
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ctx => {
  const posts = (await getPosts(ctx.preview)).slice(0, 6)

  return { props: { posts } }
}

export default Index
