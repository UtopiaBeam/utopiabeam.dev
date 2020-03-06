import React from 'react'
import App from './src/components/App'
import 'katex/dist/katex.min.css'
import 'prismjs/themes/prism-tomorrow.css'

export function onServiceWorkerUpdateReady() {
  window.location.reload()
}

export function wrapPageElement({ element, props }) {
  return <App {...props}>{element}</App>
}
