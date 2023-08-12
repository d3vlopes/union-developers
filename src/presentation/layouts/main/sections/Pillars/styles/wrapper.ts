import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    position: relative;
    margin-top: 7.2rem;
    display: flex;
    flex-direction: column;
    background: ${theme.colors.background.bg1};
    background-clip: padding-box;
    border: 3px solid transparent;
    border-radius: 20px;
    scroll-margin-block-start: 150px;
    scroll-margin-block-end: 150px;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      margin: -3px;
      border-radius: inherit;
      background: ${`linear-gradient(-74deg,${theme.colors.blue} 45%,${theme.colors.purple} 100%)`};
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      border-radius: inherit;
      margin: -5px;
      background: ${`linear-gradient(
        360deg,
        ${theme.colors.background.bg1} 95%,
        rgba(31, 29, 43, 0) 100%
      )`};
    }

    ${media.md`
      & {
        margin-top: calc(3.2rem + 11rem);
      }

      &:before {
        background: ${`linear-gradient(-74deg,${theme.colors.blue} -10%,${theme.colors.purple} 100%)`};
      }

      &:after {
        background: ${`linear-gradient(
          360deg,
          ${theme.colors.background.bg1} 75%,
          rgba(31, 29, 43, 0) 100%
        )`};
      }
    `}
  `}
`
