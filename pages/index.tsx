import { useState, useEffect } from 'react';
import { FirstSection } from '../compontents/FirstSection';
import { SecondSection } from '../compontents/SecondSection';
import { CountDown } from '../compontents/CountDown';
import { LocationSection } from '../compontents/LocationSection';
import { CheckIn } from '../compontents/CheckIn';

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
      <FirstSection />
      <SecondSection />
      <CountDown />
      <LocationSection />
      <CheckIn />
    </div>
  );
}
