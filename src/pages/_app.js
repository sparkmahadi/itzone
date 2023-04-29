import Layout from '@/components/layout'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import store from './../redux/app/store';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    router.events.on("routeChangeStart", () => setLoading(true));
    router.events.on("routeChangeComplete", () => setLoading(false));
    router.events.on("routeChangeError", () => setLoading(false));
  });


  return (
    <Provider store={store}>
      {
        loading ? <h2>Loading....</h2>
          :
          <Layout>
            <Component {...pageProps} />
            <Toaster></Toaster>
          </Layout>
      }

    </Provider>
  )
}
