import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    padding: 2.4rem 1.6rem;
    background-color: ${theme.colors.background.bg2};

    ${media.md`
      display: grid;
      grid-template-columns: repeat(2, 1fr) 8.6rem;
      gap: 12rem;
      padding: 4rem 9.2rem;
    `}
  `}
`
