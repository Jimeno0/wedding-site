import styled, { css } from 'styled-components';
import { Text } from '../Text';

export const CheckInWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: 60px;
  padding-top: 50px;
  padding-bottom: 70px;
  position: relative;
  a {
    color: black;
    margin-bottom: 40px;
    margin-top: 30px;
    border: 1px solid black;
    padding: 15px 25px;
    text-decoration: none;
  }
  picture {
    display: flex;
    justify-content: flex-end;
  }
`;

export const descriptionStyles = css`
  width: 80%;
  margin-top: 5px;
`;

export const Cheese = styled.img`
  position: absolute;
  top: 0px;
  left: 5%;
  height: 118px;
`;

export const SideText = styled(Text)`
  position: absolute;
  top: 49px;
  left: 68px;
  transform-origin: 0 0;
  transform: rotate(90deg) translateX(0px);
  opacity: 1;
  transition: ease-in-out all 0.5s 0.2s;
`;
