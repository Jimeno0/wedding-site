import styled from 'styled-components';

export const SecondSectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 200px 50px 50px;
  position: relative;
  > p {
    position: absolute;
    bottom: 30px;
    left: 50px;
    transform-origin: 0 0;
    transform: rotate(-90deg) translateY(-120%);
  }
  img {
    width: 100%;
  }
`;
