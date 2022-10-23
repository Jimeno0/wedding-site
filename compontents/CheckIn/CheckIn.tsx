import { CheckInWrapper } from './CheckIn.styled';
import { Text } from '../Text';

export const CheckIn = () => {
  return (
    <CheckInWrapper>
      <picture>
        <source srcSet="/bilma.jpg" type="image/webp" />
        <img src="/bilma.jpg" alt="fachada finca el gasto" />
      </picture>

      <Text as="h3" size="1rem">
        Nos ayudas a organizarnos? En el siguiente formulario encontrarás todos los detalles.
      </Text>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfQOre1e1r1mC1-j9KnVz0E2Gddh-b4F26-QfBekq-Kd2-MGA/viewform"
        >
          Rellenar formulario
        </a>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          paddingTop: 30,
        }}
      >
        <Text>CC: ES6400495124642116438485</Text>
      </div>
    </CheckInWrapper>
  );
};
