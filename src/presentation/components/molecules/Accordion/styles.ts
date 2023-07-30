import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

interface AccordionModifiersProps {
  isActive: boolean
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @keyframes fadeInAndMove {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

export const Header = styled.dt<AccordionModifiersProps>`
  ${({ theme, isActive }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1.6rem;
    background: ${theme.colors.gradient};
    border-radius: ${isActive ? '10px 10px 0px 0px' : '10px'};

    h3 {
      font-size: ${theme.fonts.size['lg']};
      font-weight: 700;
      text-align: initial;
      line-height: 2.2rem;
      color: ${theme.colors.text['500']};
      max-width: 27rem;
      animation: ${isActive
        ? `fadeInAndMove ${theme.transitions.default} forwards`
        : 'none'};
    }

    ${media.md`
      padding: 3.2rem 3.2rem 2.4rem 3.2rem;

      h3 {
        font-size: ${theme.fonts.size['4xl']};
        line-height: 3.5rem;
        max-width: 73rem;
      }
    `}

    ${media.xl`
      h3 {
        max-width: 107.2rem;
      }
    `}
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    background: none;
    height: min-content;
    animation: fadeIn ${theme.transitions.slow} forwards;

    &:focus {
      box-shadow: 0 0 0 3px #ffbf47;
      outline: 3px solid transparent;
    }

    img {
      position: absolute;
      top: 0;
      right: 0;
      width: 3rem;
      height: 3rem;
    }

    ${media.md`
      img {
        width: 4rem;
        height: 4rem;
      }
    `}

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `}
`

export const Content = styled.dd<AccordionModifiersProps>`
  ${({ theme, isActive }) => css`
    display: ${isActive ? 'block' : 'none'};
    padding: 2rem 1.6rem;
    background-color: ${theme.colors.neutral['100']};
    border-radius: 0px 0px 10px 10px;
    transition: all ${theme.transitions.default};

    p {
      font-size: ${theme.fonts.size['base']};
      line-height: 140%;
      color: ${theme.colors.text['700']};
      animation: fadeInAndMove ${theme.transitions.default} forwards;

      &:not(:last-child) {
        margin-bottom: 1.6rem;
      }
    }

    ${media.md`
      padding: 3.2rem;

      p {
        max-width: 119.2rem;
        font-size: ${theme.fonts.size['3xl']};
      }
    `}
  `}
`
