import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Line = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 15px;
    right: 53px;
    width: 3px;
    height: calc(100% + 1.5rem);
    background: ${`linear-gradient(75deg,${theme.colors.blue} 0%,${theme.colors.purple} 100%)`};
    z-index: -1;
    border-radius: 10px;

    ${media.xl`
      top: 0;
      left: 50%;
    `}
  `}
`
