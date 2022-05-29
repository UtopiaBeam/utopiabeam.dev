import { GetStaticProps } from 'next'
import React from 'react'
import parse from 'remark-parse'
import gfm from 'remark-gfm'
import remarkToRehype from 'remark-rehype'
import html from 'rehype-stringify'
import { unified } from 'unified'
import { Experiences, getExperiences } from '../utils'
import SEO from '../components/seo'
import Experience from '../components/experience'

interface Props extends Experiences {}

const Me: React.FC<Props> = props => {
  return (
    <>
      <SEO title="About me" description="About me" />
      <div className="md:w-3/4 lg:w-1/2 mx-auto my-3 space-y-8 text-gray-300">
        <h1>Education</h1>
        {props.educations.map(data => (
          <Experience key={data.sys.id} data={data} />
        ))}
        <hr />
        <h1>Work Experience</h1>
        {props.works.map(data => (
          <Experience key={data.sys.id} data={data} />
        ))}
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ctx => {
  const { works, educations } = await getExperiences(ctx.preview)

  const parser = (content: string) =>
    unified()
      .use(parse)
      .use(gfm)
      .use(remarkToRehype)
      .use(html)
      .process(content)
      .then(t => t.toString())

  return {
    props: {
      works: await Promise.all(
        works.map(async ({ description, ...rest }) => ({
          ...rest,
          description: await parser(description),
        }))
      ),
      educations: await Promise.all(
        educations.map(async ({ description, ...rest }) => ({
          ...rest,
          description: await parser(description),
        }))
      ),
    },
  }
}

export default Me
