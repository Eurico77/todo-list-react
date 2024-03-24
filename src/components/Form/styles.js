import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Input = styled.input`
  width: 44rem;
  height: 4rem;
  padding: 12px 20px;
  border: 1px solid #e1e1e6;
  border-radius: 8px;
  font-size: 2rem;
  color: #000;
  margin-top: -50px;
  outline: none;
  transition: border-color 0.2s;

  @media screen and (max-width: 768px) {
    max-width: 90%;
    text-align: center;
    font-size: 1rem;
    width: 100%;
    height: 3rem;
  }
`;

export const Button = styled.button`
  width: 25rem;
  height: 60px;
  border: none;
  border-radius: 8px;
  margin: 16px;
  background-color: #d62828;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  font-size: 2rem;
  transition: background-color 0.2s;
  &:hover {
    background-color: #f63823;
  }

  @media screen and (max-width: 768px) {
    max-width: 60%;
    font-size: 1rem;
    width: 100%;
  }
`;
