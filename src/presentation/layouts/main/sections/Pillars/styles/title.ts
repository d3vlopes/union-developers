import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const TitleWrapper = styled.header`
  ${({ theme }) => css`
    position: absolute;
    display: inline-block;
    background: ${theme.colors.background.bg1};
    margin: -18px 0 0 calc(100vw - 85%);
    padding: 0 15px 0 15px;

    h2 {
      font-size: ${theme.fonts.size['xl']};
      font-weight: 600;
      background: ${theme.colors.text.gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
    }

    @media (min-width: 320px) {
      margin: -18px 0 0 calc(100vw - 76%);
    }

    @media (min-width: 365px) {
      margin: -18px 0 0 calc(100vw - 75%);
    }

    @media (min-width: 428px) {
      margin: -18px 0 0 calc(100vw - 72%);
    }

    ${media.md`
      & {
        margin: -35px 0 0 39%;
      }

      h2 {
        font-size: ${theme.fonts.size['6xl']};
      }
    `}

    ${media.lg`
      & {
        margin: -35px 0 0 44%;
      }

      h2 {
        font-size: ${theme.fonts.size['6xl']};
      }
    `}
  `}
`
