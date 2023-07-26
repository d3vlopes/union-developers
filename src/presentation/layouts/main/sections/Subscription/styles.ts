import styled, { DefaultTheme, css } from 'styled-components'

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

interface DescriptionProps {
  stepIndex: number
}

export const Description = styled.p<DescriptionProps>`
  ${({ theme, stepIndex }) => css`
    font-size: ${theme.fonts.size['sm']};
    line-height: 140%;
    text-align: center;
    color: ${theme.colors.text['500']};
    margin: ${stepIndex === 0 ? '2.4rem 0' : '2.4rem 0 0'};
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

export const Nav = styled.nav`
  margin: 3.2rem 0;

  ul {
    display: inline-flex;
    height: 6.8rem;
    gap: 0.2rem;
  }

  ${media.md`
    height: 11.1rem;
  `}

  ${media.lg`
    ul {
      width: 100%;
      justify-content: center;
      gap: 13.5rem;
    }
  `}
`

const navLinksModifiers = {
  active: (theme: DefaultTheme) => css`
    ${StepTitle} {
      color: ${theme.colors.text['500']};
    }

    ${StepNumber} {
      background: ${theme.colors.gradient};

      &:after {
        background: ${theme.colors.gradient};
      }
    }
  `,

  disable: (theme: DefaultTheme) => css`
    ${StepTitle} {
      color: ${theme.colors.neutral['300']};
    }

    ${StepNumber} {
      background: ${theme.colors.neutral['300']};

      &:after {
        background: ${theme.colors.neutral['300']};
      }
    }
  `,
}

interface NavLinkProps {
  active: boolean
}

export const NavLink = styled.div<NavLinkProps>`
  ${({ theme, active }) => css`
    display: flex;
    width: 8.4rem;
    height: 6.8rem;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    &:nth-child(3) {
      ${StepTitle} {
        max-width: 6rem;
      }
    }

    &:last-child {
      ${StepNumber} {
        top: 15px;

        &:after {
          display: none;
        }
      }
    }

    ${media.md`
      width: 12.4rem;
      height: 6.8rem;

      &:last-child {
        ${StepNumber} {
          top: 21px;
        }
      }
    `}

    ${media.lg`
      width: 13.9rem;
      height: 11.1rem;
      gap: 1rem;

      ${StepTitle} {
        max-width: 13.9rem;
      }

      &:last-child {
        ${StepNumber} {
          top: 25px;
        }
      }
    `}

    ${active
      ? navLinksModifiers.active(theme)
      : navLinksModifiers.disable(theme)};
  `}
`

export const StepTitle = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.neutral['300']};
    font-family: ${theme.fonts.family.heading};
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    line-height: 125%;

    ${media.md`
      font-size:${theme.fonts.size['base']};
    `}

    ${media.lg`
      font-size:${theme.fonts.size['xl']};
      line-height: 110%;
    `}
  `}
`

export const StepNumber = styled.span`
  ${({ theme }) => css`
    position: relative;
    border-radius: 50%;
    padding: 0.7rem;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size['xl']};
    font-family: ${theme.fonts.family.heading};
    font-weight: 600;
    color: ${theme.colors.text['500']};

    &:after {
      content: '';
      position: absolute;
      top: 13px;
      left: 40px;
      width: 40px;
      height: 3px;
      border-radius: 10px;
    }

    ${media.md`
      width: 4rem;
      height: 4rem;

      &:after {
        top: 1.9rem;
        left: 6rem;
        width: 4.8rem;
      }
    `}

    ${media.lg`
      width: 5rem;
      height: 5rem;
      font-size: ${theme.fonts.size['4xl']};

      &:after {
        width: 13.5rem;
        height: 5px;
        top: 25px;
        left: 95px;
      }
    `}
  `}
`
