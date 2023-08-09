import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

import { media } from '@/presentation/styles/helpers'

export const Description = styled(motion.p)`
  ${({ theme }) => css`
    margin-top: 1.4rem;
    font-size: ${theme.fonts.size['base']};
    line-height: 150%;
    max-width: 34.1rem;
    color: ${theme.colors.text['500']};

    ${media.md`
      margin-top: 2.7rem;
      font-size: ${theme.fonts.size['3xl']};
      max-width: 64rem;
    `}
  `}
`
