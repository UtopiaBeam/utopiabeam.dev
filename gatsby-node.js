const { resolve } = require('path')

const CARD_PER_PAGE = 6
const templateDir = 'src/templates/'

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    {
      site {
        siteMetadata {
          author
        }
      }
      allContentfulPost(sort: { fields: createdAt, order: DESC }) {
        posts: nodes {
          slug
          featured
        }
      }
    }
  `)

  const {
    site,
    allContentfulPost: { posts },
  } = data
  posts.forEach(post => {
    createPage({
      path: `blog/${post.slug}`,
      component: resolve(templateDir, 'Post.tsx'),
      context: {
        slug: post.slug,
        author: site.siteMetadata.author,
      },
    })
  })
}
