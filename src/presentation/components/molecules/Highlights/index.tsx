import { HighlightModel } from '@/domain/models'

import { HighlightTemplate } from './templates'

import * as S from './styles'

export interface HighlightsProps {
  items: HighlightModel[]
}

export const Highlights = ({ items }: HighlightsProps) => {
  return <S.Wrapper>{items.map(HighlightTemplate)}</S.Wrapper>
}
