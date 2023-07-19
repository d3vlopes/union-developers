import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Wrapper = styled.section`
  width: 100%;
  margin-top: 5.6rem;
  scroll-margin-block-start: 150px;
  scroll-margin-block-end: 150px;

  ${media.md`
    margin-top: 15.5rem;
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    margin: 2.4rem auto 0;
    color: ${theme.colors.text['500']};
    font-size: ${theme.fonts.size['base']};
    text-align: center;
    max-width: 34.3rem;

    ${media.md`
      margin: 4rem auto;
      font-size: ${theme.fonts.size['3xl']};
      max-width: 85.5rem;
    `}
  `}
`

export const TestimonialWrapper = styled.div`
  margin-top: 4rem;

  ${media.md`
    margin-top: 8rem;
  `}
`
