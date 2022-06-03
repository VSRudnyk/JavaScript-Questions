import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  height: 100vh;

  @media screen and (min-width: 320px) {
    width: 300px;
  }

  @media screen and (min-width: 768px) {
    width: 646px;
  }

  @media screen and (min-width: 1024px) {
    width: 912px;
  }
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 50%;
  gap: 4px;
  position: absolute;
  bottom: 0;
  width: inherit;
`;

export const Pre = styled.pre`
  @media screen and (min-width: 320px) {
    font-size: 12px;
  }
`;

export const Button = styled.button`
  display: block;
  height: 40px;
`;
