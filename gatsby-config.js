const siteUrls = {
  production: 'https://utopiabeam.dev',
  staging: 'https://staging.utopiabeam.dev',
  development: 'localhost:8080',
}

require('dotenv').config({ path: `.env` })

module.exports = {
  siteMetadata: {
    title: `UtopiaBeam`,
    description: `A developer in a coconut shell`,
    author: `Natchapol Srisang`,
    siteUrl: siteUrls[process.env.NODE_ENV],
    fbApp: '100001227099580',
    fbUrl: 'https://www.facebook.com/natchapolsrisang',
    githubUrl: 'https://github.com/UtopiaBeam',
    linkedInUrl: 'https://www.linkedin.com/in/natchapol-srisang-3b723b16a',
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
              quality: 80,
              withWebp: true,
            },
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              showLineNumbers: false,
              noInlineHighlight: true,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`,
            },
          },
          `gatsby-remark-embed-video`,
          `gatsby-remark-responsive-iframe`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        sourceMap: true,
        cssPropOptimization: true,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        excludes: ['/page/*', '/tags/**/*'],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `UtopiaBeam`,
        short_name: `UtopiaBeam`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `assets/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
  ],
}
