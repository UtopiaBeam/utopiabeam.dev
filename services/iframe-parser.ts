import { Plugin } from 'unified'
import { selectAll } from 'unist-util-select'
import { MarkdownNode } from '.'

function createIframe(node: MarkdownNode, url: string) {
  node.type = 'html'
  node.value = `
    <div class="w-full aspect-w-16 aspect-h-9 ">
      <iframe
        src="${url}"
        class="w-full border-0"
        loading="lazy"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  `
}

const iframeParser: Plugin = () => async (markdownAST: MarkdownNode) => {
  const nodes = selectAll('[type=inlineCode]', markdownAST) as MarkdownNode[]

  await Promise.all(
    nodes.map(async node => {
      const matcher = node.value.match(/(\w+):\s?(.+)/)
      if (matcher === null) {
        return
      }

      const [, provider, url] = matcher
      if (provider === 'youtube') {
        const result = url.split('/')
        const videoId = result[result.length - 1]
        createIframe(node, `https://www.youtube.com/embed/${videoId}`)
      } else {
        console.log(node.value)
        console.log(provider)
        console.log(url)
      }
    })
  )
}

export default iframeParser
