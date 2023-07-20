import { PillarsSectionType } from '@/domain/models'

import { sanitizeHTML } from '@/libs/sanitizers'

import { MethodologyCards } from '@/presentation/components/molecules'

import * as S from './styles'

export const PillarsSection = ({
  id,
  heading,
  description,
  methodologyCards,
}: PillarsSectionType) => {
  const clearDescriptionHTML = sanitizeHTML(description)

  return (
    <S.Wrapper id={id}>
      <S.TitleWrapper>
        <h2>{heading}</h2>
      </S.TitleWrapper>

      <S.DescriptionContent
        dangerouslySetInnerHTML={{
          __html: clearDescriptionHTML,
        }}
      />

      <S.CardsWrapper>
        <MethodologyCards items={methodologyCards} />
      </S.CardsWrapper>
    </S.Wrapper>
  )
}
