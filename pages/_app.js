import '../sass/main.scss'
import {Layout} from "../components/layout/Layout";
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
      
  )
}

export default MyApp;
