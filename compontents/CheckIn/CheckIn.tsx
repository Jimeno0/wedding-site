import { CheckInWrapper } from './CheckIn.styled';

export const CheckIn = () => {
  return (
    <CheckInWrapper>
      <a>Check in</a>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfQOre1e1r1mC1-j9KnVz0E2Gddh-b4F26-QfBekq-Kd2-MGA/viewform?embedded=true"
        width="100%"
        height="797"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
      >
        Cargando…
      </iframe>
      <picture>
        <source srcSet="/bilma.jpg" type="image/webp" />
        <img src="/bilma.jpg" alt="fachada finca el gasto" />
      </picture>
    </CheckInWrapper>
  );
};
