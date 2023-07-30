import styled from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Wrapper = styled.section`
  width: 100%;
  margin: 5.6rem 0;
  scroll-margin-block-start: 150px;
  scroll-margin-block-end: 150px;

  ${media.md`
    margin-top: 15.5rem;
  `}
`

export const QuestionsWrapper = styled.div`
  margin: 3.2rem auto 0;
  padding: 0;

  ${media.md`
    margin: 5.6rem auto 0;
  `}
`
