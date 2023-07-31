import styled from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.md`
    align-items: flex-start;
  `}
`
