import styled from 'styled-components';
import { TextProps } from '../Text';

type AttrsProps = { textScale: number; textOpacity: number };

export const Wrapper = styled.div`
  position: relative;
  min-height: 200vh;
  width: 100%;
`;

export const Background = styled.div`
  min-height: 100vh;
  background-color: white;
  width: 100%;
  position: sticky;
  top: 0;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const AndPersandImage = styled.img.attrs<AttrsProps>(({ textScale, textOpacity }) => ({
  style: {
    transform: `translate(-50%, -50%) scale(${textScale})`,
    opacity: textOpacity,
  },
}))<TextProps>`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const BottomWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 30px 120px;
`;
export const BottomLeftWrapper = styled.div``;
export const BottomRightWrapper = styled.div``;
