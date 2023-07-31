import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const NavColumn = styled.div`
  ${({ theme }) => css`
    h2 {
      font-size: ${theme.fonts.size['lg']};
      color: ${theme.colors.text['500']};
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-top: 1rem;
    }

    li a {
      font-size: ${theme.fonts.size['base']};
      color: ${theme.colors.text['500']};

      &:hover {
        background: ${theme.colors.gradient};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    ${media.md`
      ul {
        gap: 1rem;
        margin-top: 2.1rem;
      }

    `}

    ${media.xl`
      h2 {
        font-size: ${theme.fonts.size['3xl']};
      }

      
      li a {
        font-size: ${theme.fonts.size['lg']};
      }
    `}
  `}
`
