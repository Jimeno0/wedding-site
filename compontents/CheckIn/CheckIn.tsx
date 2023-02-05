import { CheckInWrapper, Cheese, descriptionStyles } from './CheckIn.styled';
import { Text } from '../Text';

export const CheckIn = () => {
  return (
    <CheckInWrapper>
      <picture>
        <source srcSet="/bilma.jpg" type="image/webp" />
        <img style={{ width: '80%' }} src="/bilma.jpg" alt="fachada finca el gasto" />
      </picture>
      <Cheese alt="" src="/cheese.png" />

      <Text size="1rem" styles={descriptionStyles}>
        ¿Nos ayudas a organizarnos? En el siguiente formulario encontrarás todos los detalles.
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
          href="https://docs.google.com/forms/d/e/1FAIpQLSc_b9etQ4-0d1smaM8Us_4HENnWj7mBTY_fIlg3ULk_Uti1YQ/viewform?usp=sf_link"
        >
          Rellenar formulario
        </a>
      </div>
    </CheckInWrapper>
  );
};
