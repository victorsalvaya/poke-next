import Layout from '../../components/Layout/index'
import GlobalStyles from '../styles/Global'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
