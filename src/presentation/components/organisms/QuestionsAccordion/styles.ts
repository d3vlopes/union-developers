import styled from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Wrapper = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;

  ${media.md`
    gap: 4rem;
  `}
`
