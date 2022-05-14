import { GetStaticProps } from 'next'
import React from 'react'
import SEO from '../components/seo'
import parse from 'remark-parse'
import gfm from 'remark-gfm'
import remarkToRehype from 'remark-rehype'
import html from 'rehype-stringify'
import { unified } from 'unified'
import { getCv } from '../utils'

interface Props {
  content: string
}

const Me: React.FC<Props> = ({ content }) => {
  return (
    <>
      <SEO title="About me" description="About me" />
      <article
        className="text-gray-200 text-lg space-y-4 leading-loose"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ctx => {
  const cv = await getCv(ctx.preview)
  const content = await unified()
    .use(parse)
    .use(gfm)
    .use(remarkToRehype)
    .use(html)
    .process(cv.content)

  return { props: { content: content.toString() } }
}

export default Me
