import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

  @media screen and (min-width: 320px) {
    width: 310px;
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
  grid-template-columns: 50% 50%;
  gap: 4px;
  position: relative;
  bottom: 0;
`;

export const Pre = styled.pre`
  @media screen and (min-width: 320px) {
    font-size: 12px;
  }
`;

export const Button = styled.button`
  padding: 16px;
`;
