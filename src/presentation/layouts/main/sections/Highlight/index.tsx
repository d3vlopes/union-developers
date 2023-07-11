import { HighlightSectionType } from '@/domain/models'

import { Headline } from '@/presentation/components/atoms'
import { Highlights } from '@/presentation/components/molecules'

import * as S from './styles'

export const HighlightSection = ({
  id,
  heading,
  description,
  highlights,
}: HighlightSectionType) => {
  return (
    <S.Wrapper id={id}>
      <Headline>{heading}</Headline>
      <S.Description>{description}</S.Description>
      <S.HighlightsWrapper>
        <Highlights items={highlights} />
      </S.HighlightsWrapper>
    </S.Wrapper>
  )
}
