import styled, { css } from 'styled-components'

import { buttonModifiers } from './modifiers'

import { ButtonProps } from '..'

type ButtonType = Pick<ButtonProps, 'variant'>

export const Button = styled.button<ButtonType>`
  ${({ theme, variant }) => css`
    position: relative;
    display: flex;
    place-items: center;
    border: none;
    text-decoration: none;
    cursor: pointer;
    border-radius: ${theme.borders.radius['sm']};
    padding: 1.8rem 5rem;
    width: inherit;
    background: none;
    transition: filter ${theme.transitions.default};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    overflow: hidden;

    span {
      color: ${theme.colors.text['100']};
      font-size: ${theme.fonts.size['2xl']};
      font-family: ${theme.fonts.family.heading};
      letter-spacing: 1.5px;
      font-weight: 700;
      z-index: 2;
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    ${!!variant && buttonModifiers[variant](theme)};
  `}
`
