import {
  CallApiVariables,
  Experience,
  Experiences,
  GetExperiencesFetchResult,
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

export interface PaginationArgs {
  limit?: number
  skip?: number
}

export async function getPosts(
  preview = false,
  args?: PaginationArgs
): Promise<Post[]> {
  const query = `
    query ($preview: Boolean!, $skip: Int, $limit: Int) {
      postCollection(
        order: [sys_firstPublishedAt_DESC]
        preview: $preview
        skip: $skip
        limit: $limit
      ) {
        items {
          sys {
            id
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

  const result: GetPostsFetchResult = await callApi(query, { preview, ...args })

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

export async function getExperiences(preview = false): Promise<Experiences> {
  const query = `
    query {
      works: experienceCollection(order: startDate_DESC, where: {type: "Work"}) {
        items {
          sys {
            id
          }
          title
          startDate
          endDate
          description
          url
        }
      }
      educations: experienceCollection(order: startDate_DESC, where: {type: "Education"}) {
        items {
          sys {
            id
          }
          title
          startDate
          endDate
          description
          url
        }
      }
    }
  `
  const result: GetExperiencesFetchResult = await callApi(query, {
    id: '4q4PvTngXONiTDCaoA3n6E',
    preview,
  })

  const { works, educations } = result.data

  return {
    works: works.items,
    educations: educations.items,
  }
}
