import {
  LocationSectionWrapper,
  SideText,
  BottomText,
  LinkWrapper,
} from './LocationSection.styled';
import { useInView } from 'react-intersection-observer';

export const LocationSection = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const { ref: subRef, inView: subtextInView } = useInView({
    threshold: 0,
  });

  return (
    <LocationSectionWrapper>
      <div ref={ref} />
      <picture>
        <source srcSet="/finca.jpeg" type="image/webp" />
        <img src="/finca.jpeg" alt="fachada finca el gasto" width={'100%'} />
      </picture>
      <SideText inView={inView} uppercase>
        Finca El gasco
      </SideText>
      <div ref={subRef} />
      <BottomText inView={subtextInView} size="0.9em">
        Hay días en la vida que son especiales por sí solos, imagínate si lo vivimos juntos, ¡te
        esperamos!
      </BottomText>
      <LinkWrapper>
        <a target="_blank" rel="noreferrer" href="https://g.page/fincaelgasco?share">
          Ver en Mapas
        </a>
      </LinkWrapper>
    </LocationSectionWrapper>
  );
};
