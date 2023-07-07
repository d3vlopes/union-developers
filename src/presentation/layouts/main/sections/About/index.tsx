import { AboutModel } from '@/domain/models'

import { sanitizeHTML } from '@/libs/sanitizers'

import * as S from './styles'

export const AboutSection = ({
  id,
  heading,
  description,
}: AboutModel) => {
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
      <S.Line />
    </S.Wrapper>
  )
}
