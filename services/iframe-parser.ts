import { Plugin } from 'unified'
import { Node } from 'unist'
import { selectAll } from 'unist-util-select'

interface MarkdownNode extends Node {
  value: string
}

function createIframe(node: MarkdownNode, url: string) {
  node.type = 'html'
  node.value = `
    <div class="">
      <iframe
        src="${url}
        class="w-full border-0"
        loading="lazy"
        allowfullscreen
      ></iframe>
    </div>
  `
}

const iframeParser: Plugin = () => async (markdownAST: MarkdownNode) => {
  const nodes = selectAll('[type=inline]', markdownAST) as MarkdownNode[]

  await Promise.all(
    nodes.map(async node => {
      const matcher = node.value.match(/(\w+):\s?(.+)/)
      if (matcher === null) {
        return
      }

      const [provider, url] = matcher
      if (provider === 'youtube') {
        createIframe(node, `https://www.youtube.com/embed/${url}`)
      } else {
        console.log(node.value)
      }
    })
  )
}

export default iframeParser
