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

  /* background-image: url('../../image/background.jpg'); */

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
  padding-bottom: 15px;
`;

export const Pre = styled.pre`
  background-color: rgb(41 45 62);
  color: #fff;
  padding: 8px 8px 16px 8px;
  border-radius: 4px;
  @media screen and (min-width: 320px) {
    font-size: 14px;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
`;

export const Button = styled.button`
  display: block;
  height: 40px;
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
  position: absolute;
  right: 10px;
  bottom: 130px;
  padding: 8px;
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
