import { Plugin } from 'unified'
import { selectAll } from 'unist-util-select'
import { Node } from 'unist'
import { MarkdownNode } from './types'

interface ImageNode extends Node {
  title?: string
  url: string
  alt?: string
}

const lazyParser: Plugin = () => async (markdownAST: MarkdownNode) => {
  const nodes = selectAll('[type=image]', markdownAST) as ImageNode[]

  await Promise.all(
    nodes.map(async node => {
      node.type = 'html'
      node.children = undefined
      node.value = `
      <img
        class="my-3"
        src="${node.url}"
        alt="${node.alt}"
        loading="lazy"
      />
    `
    })
  )
}

export default lazyParser
