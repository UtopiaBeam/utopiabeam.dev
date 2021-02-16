import { Post } from './types'

interface FetchResult {
  data: {
    postCollection: {
      items: Post[]
    }
  }
}

export async function getPosts(preview = false) {
  const query = `
    query ($preview: Boolean!) {
      postCollection(order: [publishedAt_DESC], preview: $preview) {
        items {
          title
          slug
          description
          banner {
            url
            width
            height
          }
          publishedAt
        }
      }
    }
  `
  const variables = { preview }

  const result: FetchResult = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accepts: 'application/json',
        Authorization: `Bearer ${
          preview ? process.env.CPA_TOKEN : process.env.CDA_TOKEN
        }`,
      },
      body: JSON.stringify({ query, variables }),
    }
  ).then(o => o.json())

  return result.data.postCollection.items
}
