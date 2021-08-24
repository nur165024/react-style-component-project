import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
  * {
    margin: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Montserrat', sans-serif;
  }
`;
