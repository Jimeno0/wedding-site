import Head from 'next/head';
import { FirstSection } from '../compontents/FirstSection';
import { SecondSection } from '../compontents/SecondSection';
import { CountDown } from '../compontents/CountDown';
import { LocationSection } from '../compontents/LocationSection';
import { CheckIn } from '../compontents/CheckIn';

export default function Home() {
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
        <title>Create Next App</title>
        <meta name="description" content="Marta&Carlos wedding site" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <FirstSection />
      <SecondSection />
      <CountDown />
      <LocationSection />
      <CheckIn />
    </div>
  );
}
