import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20.4rem;
    height: max-content;
    min-height: 19.6rem;
    background-color: ${theme.colors.background.bg2};
    padding: 2.4rem 1.6rem 2.4rem 3.2rem;
    border-radius: 10px;

    span {
      position: absolute;
      top: 0;
      left: -50px;
      font-size: 14rem;
      font-weight: 700;
      letter-spacing: 3.2rem;
      background: ${theme.colors.gradient};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    ${media.xl`
      width: 44.1rem;
      min-height: 24.3rem;
      padding: 4rem 3.2rem 4rem 7.2rem;

      span {
        font-size: 20rem;
      }
    `}
  `}
`
