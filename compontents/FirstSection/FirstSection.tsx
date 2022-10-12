import { useEffect, useState } from 'react';
import {
  Background,
  Wrapper,
  BottomLeftWrapper,
  BottomRightWrapper,
  BottomWrapper,
  AndPersandImage,
} from './FirstSection.styled';
import { Text } from '../Text';
import { ArrowDown } from '../ArrowDown';

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

      if (relativePercentage < 0) return;
      setSTextOpacity(1 / (relativePercentage / 3));

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
        <AndPersandImage
          textScale={scaleText}
          textOpacity={textOpacity}
          width="200px"
          alt="pedida"
          src="/andpersand.png"
        />
        <BottomWrapper>
          <BottomLeftWrapper>
            <Text uppercase color="black">
              Marta/Carlos
            </Text>
            <Text uppercase color="black">
              15 Julio 2023
            </Text>
          </BottomLeftWrapper>
          <ArrowDown />
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
