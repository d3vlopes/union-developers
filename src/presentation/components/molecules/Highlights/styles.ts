import styled, { css } from 'styled-components'

import { motion } from '@/libs/animations'

import { media } from '@/presentation/styles/helpers'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;

  ${media.md`
    & {
      gap: 10rem;
    }
  `}
`

export const Highlight = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;

  ${media.md`
    display: inline-flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 5.8rem;
    flex-direction: row;
    text-align: left;


    &:nth-child(even) {
      flex-direction: row-reverse;

      h3, p {
        text-align: right;
      }
    }
  `}
`

export const IconWrapper = styled.div`
  img {
    width: 8rem;
    height: 8rem;
  }

  ${media.md`
    img {
      width: 16rem;
      height: 16rem;
    }
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      font-size: ${theme.fonts.size['lg']};
      font-weight: 700;
      line-height: 2.2rem;
      color: ${theme.colors.text['100']};
      margin-top: 2.4rem;
    }

    p {
      font-size: ${theme.fonts.size['base']};
      line-height: 150%;
      color: ${theme.colors.text['600']};
      margin-top: 1.2rem;
      max-width: 29rem;
    }

    ${media.md`
      gap: 2.8rem;
      justify-content: initial;
      align-items: initial;

      h3, p {
        margin: 0;
      }

      h3 {
        font-size: ${theme.fonts.size['5xl']};
        line-height: 4.4rem;
        max-width: 65.9rem;
      }

      p {
        font-size: ${theme.fonts.size['3xl']};
        line-height: 3rem;
        max-width: 67.4rem;
      }
    `}
  `}
`
