import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Bebas Neue', cursive; 
    -webkit-font-smoothing: antialiased;
     height: 100%;
  }
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  min-height: 100vh;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0 10px;
  }
`;
