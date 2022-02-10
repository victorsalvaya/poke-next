import Layout from '../components/Layout/index'
import GlobalStyles from '../styles/Global'
import { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
