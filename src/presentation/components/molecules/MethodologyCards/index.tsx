import { MethodologyModel } from '@/domain/models'

import { MethodologyCardTemplate } from './templates'

import * as S from './styles'

export interface MethodologyCardsProps {
  items: MethodologyModel[]
}

export const MethodologyCards = ({
  items,
}: MethodologyCardsProps) => {
  return <S.Wrapper>{items.map(MethodologyCardTemplate)}</S.Wrapper>
}
