import { CallApiVariables, GetPostsFetchResult, Post } from './types'

const contentfulApiUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`

async function callApi<T>(
  query: string,
  variables: CallApiVariables
): Promise<T> {
  const result = await fetch(contentfulApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
      Authorization: `Bearer ${
        variables.preview ? process.env.CPA_TOKEN : process.env.CDA_TOKEN
      }`,
    },
    body: JSON.stringify({ query, variables }),
  })

  return result.json()
}

export async function getPosts(preview = false): Promise<Post[]> {
  const query = `
    query ($preview: Boolean!) {
      postCollection(order: [sys_firstPublishedAt_DESC], preview: $preview) {
        items {
          sys {
            firstPublishedAt
          }
          title
          slug
          description
          banner {
            url
            width
            height
          }
          tagsCollection {
            items {
              ...on Tag {
                name
              }
            }
          }
        }
      }
    }
  `

  const result: GetPostsFetchResult = await callApi(query, { preview })

  return result.data.postCollection.items
}

export async function getPost(slug: string, preview = false): Promise<Post> {
  const query = `
    query ($slug: String!, $preview: Boolean!) {
      postCollection(where: { slug: $slug }, preview: $preview) {
        items {
          sys {
            firstPublishedAt
          }
          title
          slug
          description
          banner {
            url
            width
            height
          }
          tagsCollection {
            items {
              ...on Tag {
                name
              }
            }
          }
          content
        }
      }
    }
  `
  const result: GetPostsFetchResult = await callApi(query, { slug, preview })

  if (result.data.postCollection.items.length === 0) {
    throw `No post ${slug}`
  }
  return result.data.postCollection.items[0]
}
