import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

import { MenuProps } from '../types'

export const HamburgerButton = styled.button<MenuProps>`
  ${({ theme, open }) => css`
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
    border: none;
    outline: none;
    background: none;
    transform: rotate(0deg);
    transition: 0.35s ease-in-out;
    display: block;
    opacity: 1;
    visibility: visible;

    ${media.lg`
      & {
        display: none;
        visibility: hidden;
        opacity: 0;
      }
    `}

    span {
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      left: 0;
      border: none;
      outline: none;
      opacity: 1;
      border-radius: 4px;
      background: ${theme.colors.text['500']};
      transform: rotate(0deg);
      transition: 0.25s ease-in-out;

      &:nth-child(1) {
        top: ${open ? '2rem' : 0};
        left: ${open ? '50%' : 0};
        width: ${open ? '0%' : 'inherit'};
      }

      &:nth-child(2) {
        top: 0.8rem;
        transform: ${open ? 'rotate(45deg)' : ''};
      }

      &:nth-child(3) {
        top: 0.8rem;
        transform: ${open ? 'rotate(-45deg)' : ''};
      }

      &:nth-child(4) {
        top: 1.6rem;
        width: ${open ? '0%' : 'inherit'};
        left: ${open ? '50%' : 0};
      }
    }
  `}
`
