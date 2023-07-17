import styled from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.3rem;
  padding: 8.5rem 1.6rem 5rem;
  width: 100%;
  height: 84.4rem;

  ${media.xl`
    margin-top: 15.6rem;
    height: 53.9rem;
  `}
`
