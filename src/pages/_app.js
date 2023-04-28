import Layout from '@/components/layout'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import store from './../redux/app/store';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        <Toaster></Toaster>
      </Layout>
    </Provider>
  )
}
