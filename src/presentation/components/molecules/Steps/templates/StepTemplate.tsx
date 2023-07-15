import { StepModel } from '@/domain/models'

import * as S from '../styles'

export const StepTemplate = (step: StepModel) => {
  return (
    <li key={step.id}>
      <S.ContentWrapper>
        <span>{step.number}</span>

        <S.TextWrapper>
          <S.Title>{step.title}</S.Title>
          <S.Description>{step.description}</S.Description>
        </S.TextWrapper>
      </S.ContentWrapper>
    </li>
  )
}
