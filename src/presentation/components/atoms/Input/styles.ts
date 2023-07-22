import styled, { DefaultTheme, css } from 'styled-components'

interface WrapperProps {
  error?: string
}

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    border: 1px solid ${theme.colors.error};
    color: ${theme.colors.error};
  `,
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    input {
      width: 100%;
      height: 5rem;
      padding: 1.2rem 0 1.2rem 1.6rem;
      font-size: ${theme.fonts.size['base']};
      line-height: 157.5%;
      color: ${theme.colors.text['500']};
      background: transparent;
      border: 1px solid ${theme.colors.neutral['300']};
      border-radius: ${theme.borders.radius['md']};
      transition: all ${theme.transitions.ease.fast};

      &::placeholder {
        color: ${theme.colors.neutral['400']};
      }

      &:focus {
        outline: none;
        background: ${`linear-gradient(${theme.colors.background.bg1}, ${theme.colors.background.bg1}) padding-box,
      linear-gradient(to right, ${theme.colors.purple}, ${theme.colors.blue}) border-box;`};
        border: 2px solid transparent;
      }

      ${!!error && wrapperModifiers.error(theme)};
    }

    span {
      font-size: ${theme.fonts.size['sm']};
      color: ${theme.colors.error};
    }
  `}
`
