import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Copyright = styled.div`
  ${({ theme }) => css`
    padding: 1.2rem 1.6rem;
    background-color: ${theme.colors.background.bg1};
    width: 100%;

    p {
      font-size: ${theme.fonts.size['sm']};
      color: ${theme.colors.neutral['300']};
      text-align: center;
    }

    ${media.md`
      p {
        font-size: ${theme.fonts.size['base']};
      }
    `}
  `}
`
