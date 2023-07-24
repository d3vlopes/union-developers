import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  ${({ theme }) => css`
    body {
      color: ${theme.colors.text['500']};
      background: ${theme.colors.background.bg1};
      font: 400 ${theme.fonts.size.base} ${theme.fonts.family.body},
        sans-serif;
    }

    input,
    textarea,
    select,
    button {
      font-size: ${theme.fonts.size.base};
      font-family: inherit;
    }

    button {
      cursor: pointer;
      border: none;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${theme.fonts.family.heading};
    }

    img {
      max-width: 100%;
    }

    ul,
    ol {
      list-style: none;
      list-style-type: none;
    }

    .modal-overlay {
      background: rgba(0, 0, 0, 0.5);
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .modal-content {
      position: relative;
      width: 100%;
      max-width: 104.2rem;
      background: ${theme.colors.gradient};
      border-radius: ${theme.borders.radius['md']};
    }

    .modal-close {
      position: absolute;
      right: 3.2rem;
      top: 3.2rem;
      border: 0;
      background: transparent;
      transition: filter 0.2s;
      box-shadow: 0 0 0 3px #ffbf47;
      outline: 3px solid transparent;

      &:hover {
        filter: brightness(0.8);
      }
    }
  `}

 `
