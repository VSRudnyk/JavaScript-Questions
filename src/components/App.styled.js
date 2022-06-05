import styled from 'styled-components';
import background from '../image/background.jpg';

export const Background = styled.div`
  height: 100vh;
  background-size: cover;
  background-image: url(${background});
`;

export const Container = styled.div`
  position: relative;
  /* overflow-y: hidden; */
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  height: 100vh;

  @media screen and (min-width: 360px) {
    width: 340px;
  }

  @media screen and (min-width: 480px) {
    width: 460px;
  }

  @media screen and (min-width: 768px) {
    width: 646px;
  }

  @media screen and (min-width: 1024px) {
    width: 912px;
  }
`;
