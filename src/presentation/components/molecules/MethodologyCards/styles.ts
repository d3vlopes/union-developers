import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  gap: 4rem;

  ${media.md`
    gap: 3.2rem;
  `}

  ${media.xl`
    flex-wrap: nowrap;
  `}
`

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-width: 34.1rem;

    ${Header} {
      color: ${theme.colors.text['500']};
    }

    ${media.md`
      &:hover {
        box-shadow: 0px 0px 60px 0px rgba(133, 29, 134, 0.7);

        ${Header} {
          background: ${theme.colors.neutral['100']};
          color: ${theme.colors.text['700']};
        }
      }
    `}

    ${media.lg`
      max-width: 39.7rem;
    `}
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 5.6rem;
    border-radius: 10px 10px 0 0;
    background: ${theme.colors.gradient};
    transition: all ${theme.transitions.fast};

    h3 {
      font-size: ${theme.fonts.size['3xl']};
      font-weight: 700;
    }

    ${media.lg`
      & {
        padding: 4rem 9.2rem;
      }

      h3 {
        font-size: ${theme.fonts.size['5xl']};
      }
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    padding: 1.6rem;
    border-radius: 0 0 10px 10px;
    background: linear-gradient(
      225deg,
      rgba(0, 72, 254, 0.1) 0%,
      rgba(133, 29, 134, 0.1) 100%
    );

    p {
      font-size: ${theme.fonts.size['base']};
      color: ${theme.colors.text['500']};
      line-height: 150%;
      text-align: center;
    }

    ${media.lg`
      & {
        padding: 1.8rem;
      }

      p {
        font-size: ${theme.fonts.size['lg']};
      }
    `}
  `}
`
