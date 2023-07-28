import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;
    margin: 4rem 0;
    text-align: center;

    img {
      width: 4rem;
      height: 4rem;
    }

    h3 {
      font-size: ${theme.fonts.size['xl']};
      color: ${theme.colors.text['100']};
    }

    p {
      max-width: 54.9rem;
      line-height: 150%;
    }

    strong {
      font-weight: 700;
      color: ${theme.colors.text['100']};
    }

    ${media.md`
      img {
        width: 7rem;
        height: 7rem;
      }

      h3 {
        font-size: ${theme.fonts.size['5xl']};
      }

      p {
        font-size: ${theme.fonts.size['lg']};
      }
    `}
  `}
`
