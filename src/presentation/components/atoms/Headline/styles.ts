import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    max-width: ${theme.grid.container};
    display: flex;
    justify-content: center;
  `}
`

export const Headline = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size['xl']};
    font-weight: 700;
    background: ${theme.colors.text.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    ${media.md`
      font-size: ${theme.fonts.size['6xl']};
    `}
  `}
`

export const LineLeft = styled.div`
  ${({ theme }) => css`
    position: absolute;
    display: block;
    top: 50%;
    left: 0%;
    width: 30%;
    height: 3px;
    background: ${`linear-gradient(225deg, ${theme.colors.blue} -70%, ${theme.colors.purple} 100%)`};
    border-radius: 20px;

    @media (min-width: 320px) and (max-width: 390px) {
      width: 25%;
    }

    ${media.md`
      width: calc(100% / 2 - 16.3rem);
      height: 5px;
    `}
  `}
`

export const LineRight = styled.div`
  ${({ theme }) => css`
    position: absolute;
    display: block;
    top: 50%;
    right: 0%;
    width: 30%;
    height: 3px;
    background: ${`linear-gradient(225deg, ${theme.colors.blue} 0%, ${theme.colors.purple} 200%)`};
    border-radius: 20px;

    @media (min-width: 320px) and (max-width: 390px) {
      width: 25%;
    }

    ${media.md`
      width: calc(100% / 2 - 16.3rem);
      height: 5px;
    `}
  `}
`
