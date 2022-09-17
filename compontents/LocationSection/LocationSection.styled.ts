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

export const SideText = styled(Text)<{ inView: boolean }>`
  position: absolute;
  top: 0;
  right: -75px;
  transform-origin: 0 0;
  transform: rotate(90deg) translateX(300px);
  opacity: 0;
  transition: ease-in-out all 0.5s 0.2s;
  ${({ inView }) => inView && 'transform: rotate(90deg) translateX(0px); opacity: 1'}
`;

export const BottomText = styled(Text)<{ inView: boolean }>`
  margin-left: 5px;
  padding-top: 10px;
  padding-bottom: 70px;
  opacity: 0;
  transition: ease-in-out all 0.5s 0.2s;
  ${({ inView }) => inView && 'opacity: 1'}
`;
