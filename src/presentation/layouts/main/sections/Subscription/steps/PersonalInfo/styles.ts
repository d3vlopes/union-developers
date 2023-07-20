import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size['sm']};
    line-height: 140%;
    text-align: center;
    color: ${theme.colors.text['500']};
    margin: 2.4rem 0;
    max-width: 29.5rem;

    ${media.md`
      font-size: ${theme.fonts.size['xl']};
      max-width: 43rem;
      margin-bottom: 3.2rem;
    `}
  `}
`
