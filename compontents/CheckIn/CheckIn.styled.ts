import styled, { css } from 'styled-components';

export const CheckInWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: 90px;
  padding-top: 50px;
  padding-bottom: 40px;
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
  margin-bottom: 10px;
  width: 80%;
  margin-top: 15px;
`;

export const Cheese = styled.img`
  position: absolute;
  top: 0px;
  left: 5%;
  height: 118px;
`;
