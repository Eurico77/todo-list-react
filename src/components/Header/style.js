import styled from 'styled-components';

export const Container = styled.div`
  background: #003049;
  max-width: 100%;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    max-width: 85vh;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  color: #d62828;
  margin-bottom: 20px;
  text-align: center;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0 10px;
  }
`;
