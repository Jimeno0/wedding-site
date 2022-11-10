import { useCountDown } from './CountDown.hooks';
import { CountDownWrapper, CounterWrapper, DigitWrapper, Bilma } from './CountDown.styled';
import { Text } from '../Text';

export const CountDown = () => {
  const countDownDiff = useCountDown();
  const { days, hours, minutes, seconds } = countDownDiff;
  return (
    <CountDownWrapper>
      <Text color="white" size="1.2rem">
        Save the date!
      </Text>
      <CounterWrapper>
        <DigitWrapper>
          <Text color="white" size={'3em'}>
            {days}
          </Text>
          <Text size="0.8rem">Dias</Text>
        </DigitWrapper>
        <DigitWrapper>
          <Text color="white" size={'3em'}>
            {hours}
          </Text>
          <Text size="0.8rem">Horas</Text>
        </DigitWrapper>
        <DigitWrapper>
          <Text color="white" size={'3em'}>
            {minutes}
          </Text>
          <Text size="0.8rem">Minutos</Text>
        </DigitWrapper>
        <DigitWrapper>
          <Text color="white" size={'3em'}>
            {seconds}
          </Text>
          <Text size="0.8rem">Segundos</Text>
        </DigitWrapper>
      </CounterWrapper>
      <a
        style={{
          color: ' white',
          border: '1px solid white',
          padding: '15px 25px',
          textDecoration: 'none',
        }}
        target="_blank"
        rel="noreferrer"
        href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=XzhwMTNlaDltNnAwamNiOWo4OHMzMmI5azcwcDNhYjlvOGQxamdiYTQ4NHI0MmdpNjZoMjNjaGhpNnMgNjVmODQ3ZTA2YTQyZDg3M2I4ODc1M2Q4YThkYjQ4YmQwZWQ0NGQ3ODg2OTE3MGZkZDRhNjAyODBmYTgzYTZiM0Bn&amp;tmsrc=65f847e06a42d873b88753d8a8db48bd0ed44d78869170fdd4a60280fa83a6b3%40group.calendar.google.com"
      >
        Añadir al calendario
      </a>
      <Bilma alt="" src="/bilma.png" />
    </CountDownWrapper>
  );
};
