import styled from 'styled-components';
import background from '../../image/background.jpg';

export const Container = styled.div`
  position: relative;
  overflow-y: hidden;
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

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 50%;
  gap: 4px;
  position: absolute;
  bottom: 0;
  width: inherit;
  padding-bottom: 15px;
`;

export const Button = styled.button`
  cursor: pointer;
  display: block;
  height: 50px;

  border-radius: 8px;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const QuestionNumber = styled.h2`
  margin-top: 15px;
  font-size: 15px;
`;

export const NextBtn = styled.button`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: -60px;
  padding: 12px;
  border-radius: 8px;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const Question = styled.h2`
  margin-top: 10px;
  margin-bottom: 25px;
`;

export const Background = styled.div`
  background-size: cover;
  background-image: url(${background});
`;

export const CodeExmpContainer = styled.div`
  font-size: 14px;
  border-radius: 6px;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`;
