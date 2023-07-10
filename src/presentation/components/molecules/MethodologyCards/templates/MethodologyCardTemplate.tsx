import { MethodologyModel } from '@/domain/models'

import * as S from '../styles'

export const MethodologyCardTemplate = (
  methodology: MethodologyModel,
) => {
  return (
    <S.Card key={methodology.id}>
      <S.Header>
        <h3>{methodology.title}</h3>
      </S.Header>
      <S.Content>
        <p>{methodology.description}</p>
      </S.Content>
    </S.Card>
  )
}
