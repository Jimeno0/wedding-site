import React from 'react';
import { SecondSectionWrapper, Heart, Wine } from './SecondSection.styled';
import { Text } from '../Text';

export const SecondSection = () => {
  return (
    <SecondSectionWrapper>
      <img style={{ width: '100%' }} alt="Marta y Carlos sonriendo" src="/pedida.png" />
      <Heart alt="" src="/heart.png" />
      <Wine alt="" src="/wine.png" />
      <Text>Madrid, pedida 28 junio 2021</Text>
    </SecondSectionWrapper>
  );
};
