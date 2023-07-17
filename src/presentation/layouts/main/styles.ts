import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: 0 1.6rem;

    ${media.xl`
      & {
        padding: 0;
      }
    `}
  `}
`

export const RememberActionSectionWrapper = styled.div`
  background-image: url(https://media.graphassets.com/M037FMNQvexFoI1u2gAP);
  background-repeat: no-repeat;
  background-size: cover;

  ${media.xl`
    background-image: url(https://media.graphassets.com/zqzyqOSd6RG6uFM2Rdgx);
  `}
`
