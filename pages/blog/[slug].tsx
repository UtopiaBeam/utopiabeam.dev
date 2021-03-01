import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import remark from 'remark'
import gfm from 'remark-gfm'
import html from 'remark-html'
import htmlKatex from 'remark-html-katex'
import math from 'remark-math'
import prism from 'remark-prism'
import SEO from '../../components/seo'
import { formatDate, getPost, getPosts, Post } from '../../services'
import iframeParser from '../../services/iframe-parser'
import lazyParser from '../../services/lazy-parser'

interface Props {
  post: Post
}

const Page: React.FC<Props> = ({ post }) => {
  const { title, slug, description, sys, banner, content } = post
  const tags = post.tagsCollection.items.map(t => t.name)

  return (
    <>
      <SEO title={title} description={description} image={banner.url} />
      <div className="md:w-3/4 lg:w-1/2 mx-auto space-y-3">
        <h1 className="dark:text-gray-100">{title}</h1>
        <div className="space-x-3 font-mono dark:text-blue-500">
          {tags.map(t => (
            <span key={`${slug}-${t}`}>#{t.toLocaleUpperCase()}</span>
          ))}
        </div>
        <p className="dark:text-gray-400">{formatDate(sys.firstPublishedAt)}</p>
        <div>
          <Image src={banner.url} width={banner.width} height={banner.height} />
        </div>
        <article
          className="dark:text-gray-200 text-lg space-y-4 leading-loose"
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
    .use(gfm)
    .use(prism)
    .use(math)
    .use(htmlKatex)
    .use(html)
    .use(iframeParser)
    .use(lazyParser)
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
