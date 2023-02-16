import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { AnalyticsWrapper } from '../components/analytics'
import Footer from '../components/footer'
import Nav from '../components/nav'
import '../styles/tailwind.css'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  return router.pathname === '/404' ? (
    <Component {...pageProps} />
  ) : (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-2L4441YPR0`}
      ></Script>
      <Script>
        {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-2L4441YPR0');
    `}
      </Script>
      <div className="flex flex-col bg-darkgray min-h-screen">
        <Nav />
        <div className="flex flex-col flex-grow px-4 md:px-8 lg:px-16 py-6 space-y-6">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
      <AnalyticsWrapper />
    </>
  )
}

export default MyApp
