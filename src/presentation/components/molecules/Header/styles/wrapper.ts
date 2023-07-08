import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding: 1.6rem 1.2rem;

    ${media.lg`
      & {
        padding: 2.2rem 1.6rem;
      }
    `}

    ${media.xl`
      & {
        padding: 2.2rem 0;
      }
    `}
  `}
`
