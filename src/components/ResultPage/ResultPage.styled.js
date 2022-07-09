import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;
