import {
  LocationSectionWrapper,
  SideText,
  BottomText,
  LinkWrapper,
  Lights,
  Candle,
} from './LocationSection.styled';

export const LocationSection = () => {
  return (
    <LocationSectionWrapper>
      <picture>
        <source srcSet="/finca.jpeg" type="image/webp" />
        <img
          style={{ opacity: 0.9 }}
          src="/finca.jpeg"
          alt="fachada finca el gasto"
          width={'100%'}
        />
      </picture>
      <Lights alt="" src="/lights.png" />
      <Candle alt="" src="/candle.png" />
      <SideText size="1.3rem" uppercase>
        Finca El gasco
      </SideText>
      <BottomText size="1em">
        Hay días en la vida que son especiales por sí solos, imagínate si lo vivimos juntos, ¡te
        esperamos!
      </BottomText>
      <LinkWrapper>
        <a
          style={{
            marginTop: '30px',
            border: '1px solid black',
            padding: '15px 25px',
            textDecoration: 'none',
          }}
          target="_blank"
          rel="noreferrer"
          href="https://g.page/fincaelgasco?share"
        >
          Ver en mapas
        </a>
      </LinkWrapper>
    </LocationSectionWrapper>
  );
};
