import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    display: block;
    width: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: #171717;
  }
  
  button {
    cursor: pointer;
  }

 `;
