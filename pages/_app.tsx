import { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
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
  
  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: rgba(0,0,0,0.75);
      background: white;
    }
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
