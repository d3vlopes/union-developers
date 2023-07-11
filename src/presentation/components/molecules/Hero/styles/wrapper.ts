import styled, { css } from 'styled-components'

import { Button } from '@/presentation/components/atoms/Button/styles'

import { media } from '@/presentation/styles/helpers'

interface WrapperProps {
  backgroundMobile: string
  backgroundDesktop: string
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ backgroundMobile, backgroundDesktop }) => css`
    display: flex;
    flex-direction: column;
    background-image: ${`url(${backgroundMobile})`};
    background-size: cover;
    padding: 5.6rem 1.6rem 1.2rem;
    width: 100%;
    height: max-content;

    ${Button} {
      margin-top: 3.2rem;
      min-height: 5.8rem;
    }

    ${media.sm`
      ${Button} {
        max-width: 34.3rem;
        min-height: 6.9rem;
      }
    `}

    ${media.md`
      background-image: ${`url(${backgroundDesktop})`};
    `}

    ${media.lg`
      & {
        flex-direction: row;
        gap: 1.4rem;

        ${Button} {
          max-width: 40rem;
          margin-top: 4rem;
        }
      }
    `}
  `}
`
