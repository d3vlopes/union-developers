import { HighlightModel } from '@/domain/models'

import * as S from '../styles'

export const HighlightTemplate = (highlight: HighlightModel) => {
  return (
    <S.Highlight key={highlight.id}>
      <S.IconWrapper>
        <img src={highlight.icon.url} alt={highlight.icon.alt} />
      </S.IconWrapper>
      <S.ContentWrapper>
        <h3>{highlight.title}</h3>
        <p>{highlight.description}</p>
      </S.ContentWrapper>
    </S.Highlight>
  )
}
