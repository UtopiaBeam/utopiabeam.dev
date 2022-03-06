import { Node } from 'unist'

export interface HtmlNode extends Node {
  tagName: string
  properties: Record<string, unknown>
  children?: HtmlNode[]
  value?: string
}
