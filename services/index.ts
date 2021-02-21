import {
  Asset,
  CallApiVariables,
  GetBackgroundFetchResult,
  GetPostsFetchResult,
  Post,
} from './types'

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

export function debounce(fn: Function, wait: number) {
  let timeout: NodeJS.Timeout
  return function () {
    const ctx = this
    const args = arguments
    const later = () => {
      timeout = null
      fn.apply(ctx, args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (!timeout) {
      fn.apply(ctx, args)
    }
  }
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export * from './types'
