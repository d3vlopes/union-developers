import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size['base']};
    line-height: 150%;
    color: ${theme.colors.text['600']};

    ${media.xl`
      font-size: ${theme.fonts.size['2xl']};
    `}
  `}
`
