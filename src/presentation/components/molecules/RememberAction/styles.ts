import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 70.9rem;
    background-color: ${theme.colors.background.bg1};
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    border-radius: ${theme.borders.radius['md']};
    padding-bottom: 4rem;

    ${media.xl`
      flex-direction: row;
      height: 32.1rem;
    `}
  `}
`

export const Logo = styled.img`
  position: relative;
  top: -40px;
  width: 35.6rem;
  height: 38.2rem;

  ${media.xl`
    width: 51.1rem;
    height: 53.9rem;
    top: 0;
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;

    h2 {
      font-size: ${theme.fonts.size['4xl']};
      font-weight: 700;
      line-height: 3.52rem;
      color: ${theme.colors.text['500']};
      max-width: 29rem;
    }

    h3 {
      margin: 2.4rem auto;
      font-size: ${theme.fonts.size['4xl']};
      font-weight: 700;
      line-height: 110%;
      color: ${theme.colors.error};
      max-width: 27rem;
    }

    a {
      button {
        width: 29.5rem;
        height: 4.7rem;
      }
    }

    ${media.xl`
      padding: 4rem 3.2rem 4rem 2.4rem;

      h2 {
        font-size: ${theme.fonts.size['5xl']};
        max-width: 77rem;
      }

      h3 {
        font-size: ${theme.fonts.size['4xl']};
        max-width: 77rem;
        margin: 3.2rem auto;
      }

      a {
        button {
          width: 42.2rem;
          height: 5.3rem;
          margin: 0 auto;
        }
      }
    `}
  `}
`
