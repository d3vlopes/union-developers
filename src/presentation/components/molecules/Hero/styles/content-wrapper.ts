import styled from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${media.md`
    & {
      padding: 19.9rem 0 13rem 9.2rem;
    }
  `}

  @media (min-width: 1400px) {
    & {
      padding: 19.9rem 0 13rem 0;
    }
  }
`
