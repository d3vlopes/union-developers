import styled from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Nav = styled.nav`
  display: flex;
  gap: 5.2rem;
  margin: 2.4rem 0;

  ${media.md`
    margin: 0;
  `}

  ${media.xl`
    gap: 9.7rem;
  `}
`
