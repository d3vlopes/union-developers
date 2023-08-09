import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

import { MenuProps } from '../types'

export const NavLink = styled.div<MenuProps>`
  ${({ theme, open }) => css`
    width: 100%;
    height: ${open ? 'inherit' : 0};
    padding: 0;
    opacity: ${open ? 1 : 0};
    visibility: ${open ? 'visible' : 'hidden'};
    overflow: hidden;
    transition: all 0.35s ease;

    .active {
      &::after {
        content: '';
        background: ${theme.colors.gradient};
        height: 1.5px;
        border-radius: ${theme.borders.radius['md']};
        width: 100%;
        position: absolute;
        bottom: -5.5px;
        left: 0;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;
      padding: 4rem 0 2rem 2rem;

      a {
        font-family: ${theme.fonts.family.heading};
        font-size: ${theme.fonts.size.lg};
        font-weight: 600;
        line-height: 2.2rem;
        color: ${theme.colors.text['500']};
        text-rendering: optimizeLegibility;
        transition: all 0.35s ease-in-out;
        position: relative;

        &:hover,
        .active {
          background: ${theme.colors.gradient};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        li {
          padding: 0;
          margin: 0;
          border: none;
        }
      }
    }

    ${media.lg`
      & {
          width: initial;
          opacity: initial;
          visibility: initial;
          overflow: initial;
          display: flex;
          justify-content: center;
          align-items: center;

          ul {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 1.6rem;
            padding: 0;
          }
        }

        .active {
          &::after {
            content: '';
            background: ${theme.colors.gradient};
            height: 1.5px;
            width: 100%;
            position: absolute;
            bottom: -46px;
            left: 0;
          }
        }
    `}

    ${media.xl`
        ul {
          a {
            font-size: ${theme.fonts.size.xl};
          }
        }
    `}
  `}
`
