import { CheckInWrapper, descriptionStyles, SideText } from './Bus.styled';
import { Text } from '../Text';

export const Bus = () => {
  return (
    <CheckInWrapper>
      <picture>
        <source srcSet="/bus_b_n.jpg" type="image/webp" />
        <img style={{ width: '80%' }} src="/bilma.jpg" alt="fachada finca el gasto" />
      </picture>
    <SideText size="1.3rem" uppercase>AUTOBUSES</SideText>

      <Text size="1rem" style={{ width: '80%', marginTop: 5 }}>
        IDA:
      </Text>
      <Text bold size="1rem" styles={descriptionStyles}>
        {`- Moncloa (pº Moret - Intercambiador):     17:30h`}
      </Text>
      <Text bold size="1rem" styles={descriptionStyles}>
        {`- Hotel PAX Torrelodones:     18:15h`}
      </Text>
      <Text size="1rem" style={{ width: '80%', marginTop: 15 }}>
        VUELTA:
      </Text>
      <Text bold size="1rem" styles={descriptionStyles}>
        {`- Finca El Gasco (ambas paradas):     2:30h`}
      </Text>
      <Text bold size="1rem" styles={descriptionStyles}>
        {`- Finca El Gasco (ambas paradas):     5:00h`}
      </Text>
    </CheckInWrapper>
  );
};
