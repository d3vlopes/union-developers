import styled from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 3.2rem;

  ${media.lg`
    & {
      padding-top: 19.9rem;
    }
  `}

  ${media.xl`
    & {
      padding-bottom: 13rem;
    }
  `}
`
