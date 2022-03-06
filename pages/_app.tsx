import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Footer from '../components/footer'
import Nav from '../components/nav'
import '../styles/tailwind.css'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  return router.pathname === '/404' ? (
    <Component {...pageProps} />
  ) : (
    <div className="flex flex-col dark:bg-darkgray min-h-screen">
      <Nav />
      <div className="flex flex-col flex-grow px-4 md:px-8 lg:px-16 py-6 space-y-6">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

export default MyApp
