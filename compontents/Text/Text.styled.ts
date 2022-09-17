import styled from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components';

export type TextProps = {
  color?: string;
  bold?: boolean;
  center?: boolean;
  size?: string;
  uppercase?: boolean;
  styles?: FlattenSimpleInterpolation;
  textScale?: number;
  textOpacity?: number;
};

export const Text = styled.p<TextProps>`
  margin: 0px;
  ${({ color }) => (color ? `color: ${color};` : undefined)}
  ${({ bold }) => (bold ? 'font-weight: 600;' : undefined)}
  ${({ center }) => (center ? 'text-align: center;' : undefined)}
  ${({ size }) => (size ? `font-size: ${size};` : undefined)}
  ${({ uppercase }) => uppercase && `text-transform: uppercase;`}
  ${({ styles }) => styles}
`;
