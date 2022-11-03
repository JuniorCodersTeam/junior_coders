import '../sass/main.scss'
import {Layout} from "../components/layout/Layout";
import { ThemeProvider } from 'next-themes'
import {useEffect, useState} from 'react';

function MyApp({ Component, pageProps }) {

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
