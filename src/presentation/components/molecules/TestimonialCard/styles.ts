import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.4rem 0.4rem;
    width: 26.1rem;
    height: max-content;
    background: ${`linear-gradient(${theme.colors.background.bg1}, ${theme.colors.background.bg1}) padding-box,
      linear-gradient(to right, ${theme.colors.purple}, ${theme.colors.blue}) border-box;`}
    border-radius: 7px;
    border: 2px solid transparent;
    margin: 0 auto;

    ${media.md`
      padding: 2.8rem 1.6rem 1.6rem;
      width: 28.6rem;
    `}

    ${media.xl`
      margin: initial;
    `}
  `}
`

export const Avatar = styled.div`
  position: relative;
  height: 9.4rem;
  width: 9.4rem;
  border-radius: 50%;
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    height: inherit;
    width: inherit;
    border-radius: inherit;
    background: ${`linear-gradient(to right, ${theme.colors.purple}, ${theme.colors.blue})`};

    img {
      position: absolute;
      height: 9rem;
      width: 9rem;
      margin: 0.2rem;
      background: transparent;
      border: 2px solid ${theme.colors.background.bg1};
      border-radius: inherit;
    }
  `}
`

export const Name = styled.h2`
  ${({ theme }) => css`
    margin-top: 1.8rem;
    text-align: center;
    font-size: ${theme.fonts.size['4xl']};
    font-weight: 700;
    color: ${theme.colors.text['100']};
  `}
`

export const TestimonialText = styled.p`
  ${({ theme }) => css`
    margin: 2.4rem 0;
    text-align: center;
    font-size: ${theme.fonts.size['base']};
    color: ${theme.colors.text['500']};
    line-height: 150%;
  `}
`

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1.6rem;

    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: ${theme.fonts.size['base']};
      font-weight: 500;
      width: 6rem;
      height: 6rem;
      transition: filter ${theme.transitions.default};

      &:hover {
        filter: brightness(0.8);
      }
    }
  `}
`
