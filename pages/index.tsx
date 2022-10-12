import { useState, useEffect } from 'react';
import Head from 'next/head';
import { FirstSection } from '../compontents/FirstSection';
import { SecondSection } from '../compontents/SecondSection';
import { CountDown } from '../compontents/CountDown';
import { LocationSection } from '../compontents/LocationSection';
import { CheckIn } from '../compontents/CheckIn';

const WEDDING_URL = 'https://wedding-site-blush.vercel.app/';
const SITE_TITLE = 'Marta & Carlos';
const SITE_DESCRIPTION = 'Bienvenidos a la web de nuestra boda!';

export default function Home() {
  const [isClientSite, setIsClientSite] = useState(false);

  useEffect(() => {
    setIsClientSite(true);
  }, []);

  if (!isClientSite) return <div />;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '700px',
        margin: '0 auto',
      }}
    >
      <Head>
        <title>Marta & Carlos</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={SITE_TITLE} />
        <meta name="msapplication-TileImage" content={WEDDING_URL} />
        <meta property="og:site_name" content={SITE_TITLE} />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content="/buceo.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
      </Head>
      <FirstSection />
      <SecondSection />
      <CountDown />
      <LocationSection />
      <CheckIn />
    </div>
  );
}
