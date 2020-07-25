const { resolve } = require('path')

const CARD_PER_PAGE = 6
const templateDir = 'src/templates/'

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    {
      allContentfulPost(sort: { fields: updatedAt, order: DESC }) {
        posts: nodes {
          slug
        }
      }
    }
  `)

  const {
    allContentfulPost: { posts },
  } = data
  posts.forEach((post, i) => {
    createPage({
      path: `blog/${post.slug}`,
      component: resolve(templateDir, 'Post.tsx'),
      context: {
        slug: post.slug,
        previousSlug: i < posts.length - 1 ? posts[i + 1].slug : '',
        nextSlug: i > 0 ? posts[i - 1].slug : '',
      },
    })
  })

  const totalPostPages = Math.ceil(posts.length / CARD_PER_PAGE)
  for (let i = 0; i < totalPostPages; i++) {
    createPage({
      path: i === 0 ? '/blog' : `/blog/${i + 1}`,
      component: resolve(templateDir, 'PostList.tsx'),
      context: {
        totalPages: totalPostPages,
        currentPage: i + 1,
        skip: i * CARD_PER_PAGE,
        limit: CARD_PER_PAGE,
      },
    })
  }
}
