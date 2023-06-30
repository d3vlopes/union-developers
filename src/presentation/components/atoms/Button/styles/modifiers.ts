import { DefaultTheme, css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const buttonModifiers = {
  primary: (theme: DefaultTheme) => css`
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: ${theme.borders.radius['sm']};
      background: ${theme.colors.gradient};
      transition: all ${theme.transitions.default};
      z-index: 1;
    }

    ${media.lg`
      &:hover:not(&:disabled) {
          border-right: 2px solid ${theme.colors.blue};
          border-left: 2px solid ${theme.colors.purple};
          background-image: ${`linear-gradient(to right, ${theme.colors.purple}, ${theme.colors.blue}),
            linear-gradient(to right, ${theme.colors.purple}, ${theme.colors.blue})`};
          background-size: 100% 2px;
          background-position: 0 100%, 0 0;
          background-repeat: no-repeat;
          background-clip: padding-box;

          &:hover {
            filter: brightness(0.9);
          }

          &::before {
            left: 100%;
          }
        }
    `}
  `,
  secondary: (theme: DefaultTheme) => css`
    border-right: 2px solid ${theme.colors.blue};
    border-left: 2px solid ${theme.colors.purple};
    background-image: ${`linear-gradient(to right, ${theme.colors.purple}, ${theme.colors.blue}),
      linear-gradient(to right, ${theme.colors.purple}, ${theme.colors.blue})`};
    background-size: 100% 2px;
    background-position: 0 100%, 0 0;
    background-repeat: no-repeat;
    background-clip: padding-box;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: ${theme.colors.gradient};
      transition: all ${theme.transitions.default};
      z-index: 1;
    }

    ${media.lg`
      &:hover:not(&:disabled) {
        border: none;
        background-image: none;
        background-size: none;
        background-position: none;
        background-repeat: none;
        background-clip: none;

        &:hover {
          filter: brightness(0.9);
        }

        &::before {
          left: 0;
        }
      }
    `}
  `,
}
