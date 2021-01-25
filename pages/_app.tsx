import { NextPage } from 'next'
import { AppProps } from 'next/app'
import '../styles/tailwind.css'

const NextApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default NextApp
