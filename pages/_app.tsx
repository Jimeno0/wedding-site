import { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';

const WEDDING_URL = 'https://www.perez-alejano.com/';
const SITE_TITLE = 'Marta & Carlos';
const SITE_DESCRIPTION = 'Madrid, 15 de Julio de 2023';
const IMAGE_URL = 'https://www.perez-alejano.com/buceo.jpg';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'CormorantGaramond';
    src: url('/Cormorant_Garamond/CormorantGaramond-Light.ttf');
    font-weight: 400;
    font-style: normal;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: CormorantGaramond, Times;
  }
  
  a {
    color: inherit;
    text-decoration: underline;
  }
  
  * {
    box-sizing: border-box;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta property="og:site_name" content={SITE_TITLE} />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={IMAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:url" content={WEDDING_URL} />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
