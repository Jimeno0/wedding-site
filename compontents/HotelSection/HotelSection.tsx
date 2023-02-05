import { LocationSectionWrapper, SideText, BottomText, SpacedText } from './HotelSection.styled';

export const HotelSection = () => {
  return (
    <LocationSectionWrapper>
      <picture>
        <source srcSet="/pax_torrelodones.png" type="image/webp" />
        <img
          style={{ opacity: 0.9 }}
          src="/pax_torrelodones.png"
          alt="fachada hotel torrelodones"
          width={'100%'}
        />
      </picture>
      <SideText size="1.3rem" uppercase>
        Alojamiento
      </SideText>
      <SpacedText size="1em">
        Para aquellos que queráis alojamiento, os dejamos los detalles del hotel Pax Torrelodones,
        donde harán parada los autobuses.
      </SpacedText>
      <SpacedText size="1em">
        Indicando que sois invitados del enlace de Marta y Carlos os ofrecen una tarifa especial.
      </SpacedText>
      <SpacedText size="1em">
        <a href="tel:918 40 66 06">918 40 66 06</a>
      </SpacedText>
      <BottomText size="1em">
        <a href="mailto:reservas.torre@paxhoteles.com">reservas.torre@paxhoteles.com</a>
      </BottomText>
    </LocationSectionWrapper>
  );
};
