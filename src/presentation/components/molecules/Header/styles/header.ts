import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Header = styled.header`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    background: ${theme.colors.background.bg2};
    transition: all 0.35s ease-in-out;
    width: 100%;
    height: auto;

    ${media.lg`
      height: 11.4rem;
    `}
  `}
`
