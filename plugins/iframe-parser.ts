import { HtmlNode } from './types'
import { visit } from 'unist-util-visit'

export function iframeParser() {
  return async (tree: HtmlNode) => {
    visit(
      tree,
      (node: HtmlNode) =>
        node.tagName === 'p' && node.children?.some(n => n.tagName === 'code'),
      transformEmbed
    )
  }
}

export function transformEmbed(node: HtmlNode): void {
  const textNode = node.children?.[0].children?.[0]
  if (!textNode) {
    return
  }
  const matcher = textNode.value.match(/(?<provider>\w+):\s?(?<url>.+)/)
  if (matcher === null) {
    return
  }
  const { provider, url } = matcher.groups
  if (provider === 'youtube') {
    const videoId = getYoutubeVideoId(url)
    createIframe(node, `https://www.youtube.com/embed/${videoId}`)
  } else {
    console.log(textNode.value)
    console.log(provider)
    console.log(url)
  }
}

// TODO: clean up after safari supports aspect-{ratio}
// ref: https://github.com/tailwindlabs/tailwindcss-aspect-ratio
function createIframe(node: HtmlNode, url: string) {
  const transformedNode: HtmlNode = {
    type: 'element',
    tagName: 'div',
    properties: {
      class: 'w-full',
    },
    children: [
      {
        type: 'element',
        tagName: 'iframe',
        properties: {
          src: url,
          class: 'border-0',
          loading: 'lazy',
          frameborder: 0,
          allow:
            'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
          allowfullscreen: true,
        },
      },
    ],
  }

  return Object.assign(node, transformedNode)
}

// https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url
export function getYoutubeVideoId(url: string): string {
  const regex =
    /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/g

  return regex.exec(url)[3]
}
