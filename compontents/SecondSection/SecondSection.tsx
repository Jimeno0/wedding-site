import React from 'react';
import { SecondSectionWrapper } from './SecondSection.styled';
import { Text } from '../Text';

export const SecondSection = () => {
  return (
    <SecondSectionWrapper>
      <img alt="pedida" src="/pedida.png" />
      <Text>Madrid, pedida 28 junio 2021</Text>
    </SecondSectionWrapper>
  );
};
