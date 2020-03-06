const { resolve } = require("path")

const CARD_PER_PAGE = 6
const templateDir = "src/templates/"

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
        nodes {
          slug
          featured
        }
      }
    }
  `)

  const { site, allContentfulPost } = data
  allContentfulPost.nodes.forEach(post => {
    createPage({
      path: post.slug,
      component: resolve(templateDir, "Post.tsx"),
      context: {
        slug: post.slug,
        author: site.siteMetadata.author,
      },
    })
  })
}
