import styled from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const CardsWrapper = styled.div`
  margin-top: 4rem;

  ${media.md`
      & {
        margin-top: 8rem;
      }
  `}
`
