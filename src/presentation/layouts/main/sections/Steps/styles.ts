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
    margin-top: 2.4rem;
    color: ${theme.colors.text['500']};
    font-size: ${theme.fonts.size['base']};
    text-align: center;

    ${media.md`
      margin: 4rem auto;
      font-size: ${theme.fonts.size['3xl']};
      max-width: 85.5rem;
    `}
  `}
`

export const StepsWrapper = styled.div`
  margin: 4rem auto 0;
  padding: 0 1.6rem;

  ${media.md`
    margin: 8rem auto 0;
    max-width:106.7rem; 
  `}
`
