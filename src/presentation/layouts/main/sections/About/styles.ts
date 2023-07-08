import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    position: relative;
    margin-top: 3.2rem;
    display: flex;
    background: ${theme.colors.background.bg1};
    background-clip: padding-box;
    border: 3px solid transparent;
    border-radius: 20px;
    width: 100%;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      margin: -3px;
      border-radius: inherit;
      background: ${`linear-gradient(-74deg,${theme.colors.blue} -50%,${theme.colors.purple} 100%)`};
    }

    ${media.md`
      & {
        max-width: ${theme.grid.container};
        margin-top: calc(3.2rem + 5rem);
      }

      &:before {
        background: ${`linear-gradient(-74deg,${theme.colors.blue} -10%,${theme.colors.purple} 100%)`};
      }
    `}
  `}
`

export const TitleWrapper = styled.header`
  ${({ theme }) => css`
    position: absolute;
    display: inline-block;
    background: ${theme.colors.background.bg1};
    margin: -18px 0 0 22px;
    padding: 0 5px 0 8px;

    h2 {
      font-size: ${theme.fonts.size['xl']};
      font-weight: 600;
      background: ${theme.colors.text.gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    ${media.md`
      & {
        margin: -35px 0 0 85px;
      }

      h2 {
        font-size: ${theme.fonts.size['6xl']};
      }
    `}
  `}
`

export const DescriptionContent = styled.div`
  ${({ theme }) => css`
    padding: 3.5rem 1.6rem 2.4rem;

    p {
      color: ${theme.colors.text['500']};
      text-align: center;
      line-height: 150%;

      &:not(:last-child) {
        padding-bottom: 2.4rem;
      }
    }

    ${media.md`
      & {
        padding: 5rem 8rem 5rem;
      }

      p {
        max-width: 102.7rem;
        text-align: left;
      }
    `}
  `}
`

export const Line = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: -66px;
    left: 50%;
    border-radius: 0 0 20px 20px;
    background: ${`linear-gradient(150deg, ${theme.colors.purple} -115%, ${theme.colors.blue} 280%)`};
    width: 5px;
    height: 64px;
    z-index: -2;

    &:after {
      content: '';
      position: absolute;
      width: inherit;
      height: inherit;
      border-radius: inherit;
      background: ${`linear-gradient(
        320deg,
        ${theme.colors.background.bg1} 0%,
        rgba(31, 29, 43, 0) 100%
      )`};
    }

    ${media.md`
      & {
        bottom: -113px;
        height: 110px;
        background: ${`linear-gradient(0deg, ${theme.colors.purple} -70%, ${theme.colors.blue} 280%)`};
      }

      &:after {
        background: ${`linear-gradient(
        320deg,
        ${theme.colors.background.bg1} 20%,
        rgba(31, 29, 43, 0) 100%
      )`};
      }
    `}
  `}
`
