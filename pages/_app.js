import '../sass/main.scss'
import {Layout} from "../components/layout/Layout";
import { ThemeProvider } from 'next-themes'
import {useEffect} from 'react';
import { useRouter } from 'next/router';
import * as analytics from "../lib/analytics"

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      analytics.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  // // for hydration failed problem useState, useEffect, line 9-17
  // const [showChild, setShowChild] = useState(false)

  // useEffect(() => {
  //   setShowChild(true)
  // }, [])

  // if (!showChild) {
  //   return null
  // }

  return (
    <ThemeProvider>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
      
  )
}

export default MyApp;
