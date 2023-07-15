import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size['lg']};
    line-height: 2.2rem;
    font-weight: 700;
    color: ${theme.colors.text['500']};

    ${media.xl`
      font-size: ${theme.fonts.size['3xl']};
      line-height: 2.6rem;
    `}
  `}
`
