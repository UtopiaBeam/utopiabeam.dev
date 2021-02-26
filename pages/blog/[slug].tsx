import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import remark from 'remark'
import html from 'remark-html'
import htmlKatex from 'remark-html-katex'
import math from 'remark-math'
import SEO from '../../components/seo'
import { getPost, getPosts, Post } from '../../services'
import iframeParser from '../../services/iframe-parser'

interface Props {
  post: Post
}

const Page: React.FC<Props> = ({ post }) => {
  const { title, description, sys, banner, content } = post
  return (
    <>
      <SEO title={title} description={description} image={banner.url} />
      <div className="w-1/2 mx-auto space-y-3">
        <h1 className="dark:text-white">{title}</h1>
        <p className="dark:text-gray-300">{description}</p>
        <Image src={banner.url} width={banner.width} height={banner.height} />
        <article
          className="dark:text-gray-300 leading-loose"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ctx => {
  const { params, preview = false } = ctx
  const post = await getPost(params.slug as string, preview)
  const content = await remark()
    .use(math)
    .use(htmlKatex)
    .use(html)
    .use(iframeParser)
    .process(post.content)

  return { props: { post: { ...post, content: content.toString() } } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts()

  return {
    paths: posts.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export default Page
