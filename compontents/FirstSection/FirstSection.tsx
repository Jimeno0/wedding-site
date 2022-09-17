import { useEffect, useState } from 'react';
import {
  Background,
  Wrapper,
  AndPersand,
  BottomLeftWrapper,
  BottomRightWrapper,
  BottomWrapper,
} from './FirstSection.styled';
import { Text } from '../Text';

export const FirstSection = () => {
  const [scaleText, setScaleText] = useState(1);
  const [textOpacity, setSTextOpacity] = useState(1);

  const handleScroll = () => {
    const height = window.innerHeight;
    const scrolled = window.pageYOffset;
    const startHeight = height * 0;
    const endHeight = height * 2;
    if (0 <= scrolled || scrolled <= endHeight) {
      const relativeScroll = scrolled - startHeight;
      const maxRelativeScroll = endHeight - startHeight;
      const relativePercentage = (relativeScroll * 100) / maxRelativeScroll;

      setSTextOpacity(1 / (relativePercentage / 2));

      setScaleText(1 + relativePercentage / 5);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, true);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Wrapper>
      <Background>
        <AndPersand
          color="black"
          size={'4rem'}
          as="h2"
          bold
          center
          textScale={scaleText}
          textOpacity={textOpacity}
        >
          {'&'}
        </AndPersand>
        <BottomWrapper>
          <BottomLeftWrapper>
            <Text uppercase color="black">
              Marta/Carlos
            </Text>
            <Text uppercase color="black">
              15 Julio 2023
            </Text>
          </BottomLeftWrapper>
          <BottomRightWrapper>
            <Text uppercase color="black">
              Madrid 19.00 H
            </Text>
            <Text uppercase color="black">
              Finca el Gasco
            </Text>
          </BottomRightWrapper>
        </BottomWrapper>
      </Background>
    </Wrapper>
  );
};
