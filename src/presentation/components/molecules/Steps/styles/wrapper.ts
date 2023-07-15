import styled from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-width: 31rem;

  ${media.xl`
    display: flex;
    min-width: 106.7rem;
  `}
`
