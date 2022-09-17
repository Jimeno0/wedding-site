import { CheckInWrapper } from './CheckIn.styled';
import { Text } from '../Text';

export const CheckIn = () => {
  return (
    <CheckInWrapper>
      <a>Check in</a>
      <Text>Ayudanos a organizarnos haciendo tu check in</Text>
      <picture>
        <source srcSet="/bilma.jpg" type="image/webp" />
        <img src="/bilma.jpg" alt="fachada finca el gasto" />
      </picture>
    </CheckInWrapper>
  );
};
