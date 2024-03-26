import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;


    --webkit-font-smoothing: antialiased;
    --moz-osx-font-smoothing: grayscale;
  }
  
  body {
    font-family: 'Bebas Neue', cursive; 
    -webkit-font-smoothing: antialiased;
  }
`;

export const Container = styled.div`
  width: 100%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
