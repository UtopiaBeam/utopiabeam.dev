import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Nav from '../components/nav'
import '../styles/tailwind.css'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  return (
    <>
      {router.pathname !== '/404' ? <Nav /> : null}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
