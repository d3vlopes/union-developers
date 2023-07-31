import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const SocialLinks = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;
    transition: filter ${theme.transitions.default};

    a:hover {
      filter: brightness(0.8);
    }

    ${media.md`
      flex-direction: column;
      gap: 3rem;
    `}
  `}
`
