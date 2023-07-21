import styled, { css } from 'styled-components'

import { Button } from '@/presentation/components/atoms/Button/styles'
import { media } from '@/presentation/styles/helpers'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: max-content;
    scroll-margin-block-start: 150px;
    scroll-margin-block-end: 150px;
    border-radius: ${theme.borders.radius['md']};
    background: linear-gradient(
      225deg,
      rgba(0, 72, 254, 0.2) 0%,
      rgba(133, 29, 134, 0.2) 100%
    );
    margin-top: 5.6rem;
    padding: 3.2rem 2.4rem;

    ${Button} {
      margin-top: 1.8rem;
      height: 4.4rem;
      border-radius: ${theme.borders.radius['md']};

      span {
        font-size: ${theme.fonts.size['base']};
      }
    }

    ${media.md`
      max-width:104.2rem;
      margin-top: 15rem;
      padding: 5.6rem;

      ${Button} {
        max-width:93rem;
        margin-top: 4rem;
        height: 6.9rem;

        span {
          font-size: ${theme.fonts.size['2xl']};
        }
      }
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size['xl']};
    font-weight: 700;
    line-height: 110%;
    text-align: center;
    color: ${theme.colors.text['500']};

    ${media.md`
      font-size: ${theme.fonts.size['6xl']};
    `}
  `}
`

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
