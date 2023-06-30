import styled from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Wrapper = styled.div`
  img {
    width: 8.8rem;
    height: 2.8rem;

    ${media.md`
      & {
          width: 11.5rem;
          height: 3.7rem;
        }
    `}
  }
`
