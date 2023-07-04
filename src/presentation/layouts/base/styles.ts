import styled from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`

export const Content = styled.main`
  flex: 1 0 auto;
  margin-top: 6.4rem;

  ${media.lg`
    margin-top: 11.4rem;
  `}
`
