import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

interface Props {
  title?: string
  description?: string
  banner?: string
  slug?: string
  date?: string
}

export default (props: Props) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          fbApp
        }
      }
    }
  `)
  const siteMetadata = data.site.siteMetadata
  const {
    title,
    description = siteMetadata.description,
    banner = '/bg.jpg',
    slug,
    date,
  } = props
  const pageTitle = title
    ? `${title} | ${siteMetadata.title}`
    : siteMetadata.title
  const meta = [
    {
      name: 'name',
      content: pageTitle,
    },
    {
      name: 'description',
      content: description,
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      name: 'author',
      content: siteMetadata.author,
    },
    {
      name: 'image',
      content: `${siteMetadata.siteUrl}${banner}`,
    },
    {
      name: 'theme-color',
      content: '#ffa500',
    },
    {
      name: 'msapplication-navbutton-color',
      content: '#ffa500',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: '#ffa500',
    },
    {
      property: 'og:url',
      content: slug ? `${siteMetadata.siteUrl}/blog/${slug}` : siteMetadata.siteUrl,
    },
    {
      property: 'og:type',
      content: 'article',
    },
    {
      property: 'og:locale',
      content: 'th_TH',
    },
    {
      property: 'og:locale:alternate',
      content: 'en_US',
    },
    {
      property: 'og:title',
      content: pageTitle,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: banner,
    },
    {
      property: 'og:image:secure_url',
      content: banner,
    },
    {
      property: 'og:image:alt',
      content: 'banner',
    },
    {
      property: 'fb:app_id',
      content: siteMetadata.fbApp,
    },
    {
      property: 'article:author',
      content: 'https://www.facebook.com/natchapolsrisang',
    },
  ]
  return (
    <Helmet title={pageTitle} meta={meta}>
      <script type="application/application/ld+json">
        {`
          {
            "@context": "http://schema.org/",
            "@type" : "Article",
            "mainEntityOfPage" : {
              "@type" : "Webpage",
              "@id" : "https://arnondora.in.th"
            }
            "author" : {
              "@type" : "Person",
              "name" : "${siteMetadata.author}"
            },
            "image" : "${siteMetadata.siteUrl}${banner}",
            "headline" : "${pageTitle}",
            "datePublished" : "${date}",
            "description" : "${description}"
          }`}
      </script>
    </Helmet>
  )
}
