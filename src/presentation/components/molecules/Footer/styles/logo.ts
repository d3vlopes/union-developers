import styled from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Logo = styled.img`
  width: 8.8rem;
  height: 2.8rem;

  ${media.md`
    width: 11.5rem;
    height: 3.6rem;
  `}
`
