import { MethodologyModel } from '@/domain/models'

import { MethodologyCard } from './components'

import * as S from './styles'

export interface MethodologyCardsProps {
  items: MethodologyModel[]
}

export const MethodologyCards = ({
  items,
}: MethodologyCardsProps) => {
  return (
    <S.Wrapper>
      {items.map((methodology) => (
        <MethodologyCard
          key={methodology.id}
          methodology={methodology}
        />
      ))}
    </S.Wrapper>
  )
}
