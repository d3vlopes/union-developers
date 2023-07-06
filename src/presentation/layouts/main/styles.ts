import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: 0 1.6rem;

    ${media.xl`
      & {
        padding: 0;
      }
    `}
  `}
`
