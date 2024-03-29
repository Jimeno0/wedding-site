import styled from 'styled-components';
import { Text } from '../Text';

export const LocationSectionWrapper = styled.section`
  position: relative;
  padding-right: 75px;
`;

export const LinkWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`;

export const SideText = styled(Text)`
  position: absolute;
  top: 0;
  right: -100px;
  transform-origin: 0 0;
  transform: rotate(90deg) translateX(0px);
  opacity: 1;
  transition: ease-in-out all 0.5s 0.2s;
`;

export const SpacedText = styled(Text)`
  margin-left: 5px;
  padding-top: 10px;
  opacity: 1;
`;
export const BottomText = styled(Text)`
  margin-left: 5px;
  padding-top: 10px;
  padding-bottom: 40px;
  opacity: 1;
`;

export const Candle = styled.img`
  position: absolute;
  bottom: 86px;
  right: 11px;
  height: 210px;
`;
