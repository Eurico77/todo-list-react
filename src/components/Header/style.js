import styled from 'styled-components';

export const Container = styled.div`
  background: #003049;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 5rem;
  color: #d62828;
  margin-bottom: 20px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;
