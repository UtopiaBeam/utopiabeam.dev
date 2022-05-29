import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import parse from 'remark-parse'
import gfm from 'remark-gfm'
import math from 'remark-math'
import prism from 'remark-prism'
import remarkToRehype from 'remark-rehype'
import katex from 'rehype-katex'
import document from 'rehype-document'
import html from 'rehype-stringify'
import { unified } from 'unified'
import SEO from '../../components/seo'
import { iframeParser } from '../../plugins'
import { formatDate, getPost, getPosts, Post } from '../../utils'

interface Props {
  post: Post
}

const Page: React.FC<Props> = ({ post }) => {
  const { title, slug, description, sys, banner, content } = post
  const tags = post.tagsCollection.items.map(t => t.name)

  return (
    <>
      <SEO title={title} description={description} image={banner.url} />
      {/* Force tailwindcss to load these classes. */}
      <div className="aspect-w-16 aspect-h-9 hidden" />
      <div className="md:w-3/4 lg:w-1/2 mx-auto my-3 space-y-3">
        <h1 className="text-gray-100">{title}</h1>
        <div className="space-x-3 font-mono text-blue-500">
          {tags.map(t => (
            <span key={`${slug}-${t}`}>#{t.toLocaleUpperCase()}</span>
          ))}
        </div>
        <p className="text-gray-400">{formatDate(sys.firstPublishedAt)}</p>
        <div>
          <Image src={banner.url} width={banner.width} height={banner.height} />
        </div>
        <article
          className="text-gray-300 text-lg space-y-4 leading-loose"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ctx => {
  const { params, preview = false } = ctx
  const post = await getPost(params.slug as string, preview)
  const content = await unified()
    .use(parse)
    .use(gfm)
    // @ts-ignore
    .use(prism)
    .use(math)
    .use(remarkToRehype)
    .use(iframeParser)
    .use(katex)
    .use(document, {
      css: 'https://cdn.jsdelivr.net/npm/katex@0.15.0/dist/katex.min.css',
    })
    .use(html)
    .process(post.content)

  return {
    props: {
      post: {
        ...post,
        content: content.toString(),
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts()

  return {
    paths: posts.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export default Page
