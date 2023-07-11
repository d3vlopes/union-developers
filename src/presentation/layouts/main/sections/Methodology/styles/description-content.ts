import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const DescriptionContent = styled.div`
  ${({ theme }) => css`
    padding: 2.4rem 1.6rem;
    margin: 0 auto;

    p {
      color: ${theme.colors.text['500']};
      text-align: center;
      line-height: 150%;

      &:not(:last-child) {
        padding-bottom: 2.4rem;
      }
    }

    ${media.md`
      & {
        padding: 5rem 8rem 5rem;
      }

      p {
        max-width: 102.7rem;
        font-size: ${theme.fonts.size['3xl']};
      }
    `}
  `}
`
