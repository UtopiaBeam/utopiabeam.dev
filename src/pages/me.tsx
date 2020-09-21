import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SEO from '../components/SEO'
import { Flex, Box } from 'rebass'
import { Global, css } from '@emotion/core'

const GlobalStyles = () => (
  <Global
    styles={css`
      a {
        text-decoration: none;
        color: rgb(44, 120, 212);
      }
      p {
        color: rgb(20, 20, 20);
        @media only screen and (max-width: 420px) {
          font-size: 18px;
        }
        @media (prefers-color-scheme: dark) {
          color: rgba(230, 230, 230);
        }
        & > img {
          display: block;
          margin: 0 auto;
        }
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        @media (prefers-color-scheme: dark) {
          color: rgba(230, 230, 230);
        }
      }
      hr {
        @media (prefers-color-scheme: dark) {
          background: rgba(200, 200, 200, 0.5);
        }
      }
      ul > li,
      ol > li {
        color: rgb(20, 20, 20);
        @media only screen and (max-width: 420px) {
          font-size: 18px;
        }
        @media (prefers-color-scheme: dark) {
          color: rgba(230, 230, 230);
        }
      }
      pre[class*='language-'] {
        border-radius: 5px;
        margin-bottom: 34px;

        & > code {
          font-size: 14px;

          @media only screen and (max-width: 420px) {
            font-size: 13px;
          }
        }
      }
      :not(pre) > code {
        font-size: 18px;

        @media only screen and (max-width: 420px) {
          font-size: 17px;
        }
      }
      .katex-html {
        overflow-x: scroll;
        @media (prefers-color-scheme: dark) {
          color: rgba(230, 230, 230);
        }
      }
      blockquote {
        font-size: 1.2em;
        padding: 0 1.5em;
        border-left: 0.3em solid rgba(44, 120, 212, 0.6);
        @media (prefers-color-scheme: dark) {
          border-left: 0.3em solid rgba(44, 120, 212, 0.8);
        }
        @media only screen and (max-width: 420px) {
          padding: 0 0.75em;
          margin-left: 0;
          margin-right: 0;
        }
      }
      table {
        table-layout: fixed;
        & > tbody {
          font-size: 0.85em;
        }
        @media (prefers-color-scheme: dark) {
          color: rgba(230, 230, 230);
        }
      }
    `}
  />
)

export default () => {
  const { contentfulCv } = useStaticQuery(graphql`
    {
      contentfulCv {
        content {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)
  return (
    <>
      <GlobalStyles />
      <SEO title="Me" slug="me" description="About myself" />
      <Flex flexDirection="column" alignItems="center">
        <Box width={4 / 5} pt={4}>
          <div
            dangerouslySetInnerHTML={{
              __html: contentfulCv.content.childMarkdownRemark.html,
            }}
          />
        </Box>
      </Flex>
    </>
  )
}
