import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    overflow: hidden;
  }

  body {
    margin: 0;
    background-color: #f5f9fe;
    font-family: ${({ theme }) => theme.fonts.primary}, sans-serif;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.info};
  }
`;

export default GlobalStyle;
