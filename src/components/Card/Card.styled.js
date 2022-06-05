import styled from 'styled-components';

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
  background-color: #fff;
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
  background-color: #fff;
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
