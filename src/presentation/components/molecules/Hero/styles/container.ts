import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Container = styled.div`
  ${({ theme }) => css`
    ${media.lg`
      & {
        display: grid;
        grid-template-columns: 3fr 2fr;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: ${theme.grid.container};
        margin: 0 auto;
      }
    `}
  `}
`
