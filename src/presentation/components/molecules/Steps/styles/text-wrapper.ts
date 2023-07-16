import styled from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const TextWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 14.4rem;
  text-align: center;
  margin: 0 auto;

  ${media.xl`
    gap: 1.6rem;
    width: 33.7rem;
  `}
`
