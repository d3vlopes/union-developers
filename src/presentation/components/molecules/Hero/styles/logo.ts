import styled from 'styled-components'
import { motion } from 'framer-motion'

import { media } from '@/presentation/styles/helpers'

export const Logo = styled(motion.img)`
  display: none;

  ${media.lg`
    & {
      display: initial;
  `}
`
