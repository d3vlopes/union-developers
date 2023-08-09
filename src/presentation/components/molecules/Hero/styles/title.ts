import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

import { media } from '@/presentation/styles/helpers'

export const Title = styled(motion.div)`
  ${({ theme }) => css`
    max-width: 38.3rem;

    h1 {
      color: ${theme.colors.text['100']};
      font-size: ${theme.fonts.size['lg']};
      font-family: ${theme.fonts.family.heading};
      font-weight: 700;
      line-height: 150%;
    }

    span,
    strong {
      background: ${`linear-gradient(346deg, ${theme.colors.blue} -48%, ${theme.colors.purple} 115%)`};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    ${media.sm`
      h1 {
        font-size: ${theme.fonts.size['xl']};
      }
    `}

    ${media.md`
      max-width: 55rem;

      h1 {
        font-size: ${theme.fonts.size['7xl']};
      }
    `}
  `}
`
