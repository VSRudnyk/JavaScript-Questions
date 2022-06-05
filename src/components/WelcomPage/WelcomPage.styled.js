import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as JSlogo } from '../../image/javascript-1.svg';

export const Container = styled.div`
  padding-top: 150px;
  @media screen and (min-width: 768px) {
    display: flex;
    height: 100%;
    align-items: center;
    gap: 50px;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    height: 100%;
    align-items: center;
    gap: 50px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 25px;
  text-align: center;
`;

export const Text = styled.p`
  text-align: justify;
  margin-bottom: 25px;
`;

export const Button = styled(Link)`
  cursor: pointer;
  background-color: #fff;
  color: inherit;
  border-radius: 8px;
  padding: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const LogoWrapper = styled.div`
  text-align: center;
`;

export const Logo = styled(JSlogo)`
  margin-top: 25px;
  width: 75px;
  height: 75px;

  @media screen and (min-width: 768px) {
    width: 175px;
    height: 175px;
  }

  @media screen and (min-width: 1024px) {
    width: 275px;
    height: 275px;
  }
`;
