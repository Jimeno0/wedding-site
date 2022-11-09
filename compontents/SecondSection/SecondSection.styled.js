import styled from 'styled-components';

export const SecondSectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 0px 50px 50px;
  position: relative;
  > p {
    position: absolute;
    bottom: 30px;
    left: 50px;
    transform-origin: 0 0;
    transform: rotate(-90deg) translateY(-120%);
  }
`;

export const Heart = styled.img`
  position: absolute;
  top: -30px;
  right: 50%;
  transform: translateX(-50%);
  height: 60px;
`;

export const Wine = styled.img`
  bottom: -5px;
  right: 1px;
  position: absolute;
  height: 200px;
`;
