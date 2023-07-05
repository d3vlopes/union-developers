import styled from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Logo = styled.img`
  display: none;

  ${media.lg`
    & {
      display: initial;
  `}
`
