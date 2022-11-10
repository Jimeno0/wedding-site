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
        href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Boda%20Marta%20%26%20Carlos%20%F0%9F%92%92&dates=20230715T190000Z+01:00/20230716T050000Z+01:00&details=Toda+la+info+en+la+web:+perez-alejano.com&location=Finca%20El%20Gasco%2C%20Almte.%20Marqu%C3%A9s%20de%20Valterra%2C%206%2C%2028250%20Torrelodones%2C%20Madrid%2C%20Espa%C3%B1a&sf=true&output=xml"
      >
        Añadir al calendario
      </a>
      <Bilma alt="" src="/bilma.png" />
    </CountDownWrapper>
  );
};
