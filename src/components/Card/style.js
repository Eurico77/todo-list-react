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
  justify-content: ${({ completed }) =>
    completed ? 'space-between' : 'flex-start'};
  align-items: center;
  width: 500px;
  margin: 21px auto;
  border-radius: 8px;
  margin-top: 25px;
  padding: 16px;

  background-color: ${({ completed }) => (completed ? '#2E8B57' : '#d62828')};

  @media screen and (max-width: 768px) {
    max-width: 90%;
    height: 4rem;
    font-size: 1rem;
    text-align: center;
    padding: 8px;
  }
`;

export const CardTitle = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ completed }) => (completed ? '#fff' : '#ddd')};
  text-align: center;
  font-family: sans-serif;

  @media screen and (max-width: 768px) {
    max-width: 90%;
    padding: 10px;
    margin: 0 auto;
  }
`;

export const Checkbox = styled.input`
  align-items: center;
  border-radius: 12px;
  margin-right: 12px;
  width: 20px;
  height: 20px;
  background-color: #e5e5e5;
  outline: none;

  @media screen and (max-width: 768px) {
    padding: 50px 10px;
    width: auto;
  }
`;

export const CardButton = styled.button`
  width: 25rem;
  height: 60px;
  border: none;
  border-radius: 8px;
  background-color: #d62828;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0 10px;
  }
`;
