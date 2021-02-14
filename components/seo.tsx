import { useRouter } from 'next/router'
import Head from 'next/head'
import React, { useMemo } from 'react'

interface Props {
  title?: string
  description?: string
  image?: string
}

const SEO: React.FC<Props> = props => {
  const { title, description = 'Developer in a coconut shell', image } = props
  const themeColor = '#ffa500'

  const router = useRouter()

  const transformedTitle = useMemo(
    () => (title ? `${title} | UtopiaBeam` : 'UtopiaBeam'),
    [title]
  )

  return (
    <Head>
      <meta charSet="utf-8" />

      <meta name="title" content={transformedTitle} />
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Natchapol Srisang (UtopiaBeam)" />
      <meta name="image" content={image} />
      <meta name="theme-color" content={themeColor} />
      <link
        rel="canonical"
        href={
          process.env.NODE_ENV === 'production'
            ? 'https://utopiabeam.dev'
            : 'https://localhost:3000'
        }
      />

      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />

      <meta name="msapplication-navbutton-color" content={themeColor} />
      <meta name="apple-mobile-web-app-capable" content={themeColor} />
      <meta name="apple-mobile-web-app-status-bar-style" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <meta name="og:title" content={transformedTitle} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />
      <meta name="og:url" content={router.asPath} />
      <meta name="og:type" content="website" />
      <meta name="og:locale" content="th_TH" />
      <meta name="fb:app_id" content="100001227099580" />

      {props.children}
    </Head>
  )
}

export default SEO
