import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Slogan = styled.div`
  ${({ theme }) => css`
    margin-top: 1.2rem;

    p {
      font-size: ${theme.fonts.size['base']};
      line-height: 140%;
      color: ${theme.colors.text['500']};
      text-align: center;
    }

    ${media.md`
      p {
        text-align: left;
      }
    `}

    ${media.xl`
      p {
        font-size: ${theme.fonts.size['xl']};
        text-align: left;
        max-width: 34.4rem;
      }
    `}
  `}
`
