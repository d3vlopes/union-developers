import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Line = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: -66px;
    left: 50%;
    border-radius: 0 0 20px 20px;
    background: ${`linear-gradient(150deg, ${theme.colors.purple} -115%, ${theme.colors.blue} 280%)`};
    width: 5px;
    height: 64px;
    z-index: -2;

    &:after {
      content: '';
      position: absolute;
      width: inherit;
      height: inherit;
      border-radius: inherit;
      background: ${`linear-gradient(
        320deg,
        ${theme.colors.background.bg1} 0%,
        rgba(31, 29, 43, 0) 100%
      )`};
    }

    ${media.md`
      & {
        bottom: -113px;
        height: 110px;
        background: ${`linear-gradient(0deg, ${theme.colors.purple} -70%, ${theme.colors.blue} 280%)`};
      }

      &:after {
        background: ${`linear-gradient(
        320deg,
        ${theme.colors.background.bg1} 20%,
        rgba(31, 29, 43, 0) 100%
      )`};
      }
    `}
  `}
`
