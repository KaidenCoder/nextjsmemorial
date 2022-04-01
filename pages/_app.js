import Head from 'next/head';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dr Ishak Ahmed</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
