import styled from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 0 auto;

  ${media.lg`
    height: 6.9rem;
  `}
`
