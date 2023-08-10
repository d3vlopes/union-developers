import { HighlightModel } from '@/domain/models'

import { Highlight } from './components'

import * as S from './styles'

export interface HighlightsProps {
  items: HighlightModel[]
}

export const Highlights = ({ items }: HighlightsProps) => {
  return (
    <S.Wrapper>
      {items.map((highlight) => (
        <Highlight key={highlight.id} highlight={highlight} />
      ))}
    </S.Wrapper>
  )
}
