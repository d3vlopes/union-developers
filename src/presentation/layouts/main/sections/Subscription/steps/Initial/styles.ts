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

export const List = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    li {
      font-size: ${theme.fonts.size['sm']};
      line-height: 140%;
      color: ${theme.colors.text['500']};
    }

    ${media.md`
      align-self: flex-start;

      li {
        font-size: ${theme.fonts.size['xl']};
        max-width: 82.6rem;
      }
    `}
  `}
`

export const RequirementWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  img {
    width: 2rem;
    height: 2rem;
  }

  ${media.md`
      img {
        width: 2.2rem;
        height: 2.2rem;
      }
    `}
`
