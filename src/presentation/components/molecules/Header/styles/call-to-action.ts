import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

import { MenuProps } from '../types'

export const CallToAction = styled.div<MenuProps>`
  ${({ open }) => css`
    button {
      display: ${open ? 'flex' : 'none'};
      justify-content: flex-start;
      height: 5.9rem;
      padding: 1rem 0.5rem;
      margin-left: 2rem;
      margin-bottom: 3rem;
      max-width: 18rem;

      span {
        font-size: 1.8rem;
        min-width: 16.7rem;
        min-height: 2.7rem;
      }
    }

    ${media.lg`
      button {
        display: flex;
        margin-bottom: initial;
        min-width: 18.6rem;
        margin-left: 0;
        justify-content: center;
      }
    `}

    ${media.xl`
      button {
        min-width: 29.9rem;
      }
    `}
  `}
`
