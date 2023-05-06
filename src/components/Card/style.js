import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 50%;
  border-radius: 12px;
  margin: 0 auto;
  margin-top: 18px;
  height: 800px;
  padding: 40px 20px;

  background-color: #e5e5e5;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 500px;
  margin: 0 auto;
  border-radius: 8px;
  margin-top: 25px;
  padding: 16px;

  background-color: ${({ completed }) => (completed ? 'red' : '#e5e5e5')};
`;

export const CardTitle = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
  text-align: center;
  font-family: sans-serif;
`;

export const Checkbox = styled.input`
  align-items: center;
  border-radius: 12px;
  margin-right: 12px;
  width: 20px;
  height: 20px;
  background-color: #e5e5e5;

  &:checked {
    background-color: red;
  }
`;

export const CardButton = styled.button`
  width: 25rem;
  height: 60px;
  border: none;
  border-radius: 8px;
  background-color: #d62828;
`;
