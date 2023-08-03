import { StepModel } from '@/domain/models'

import { StepTemplate } from './templates'

import * as S from './styles'

export interface StepsProps {
  steps: StepModel[]
}

export const Steps = ({ steps }: StepsProps) => {
  const items = [...steps]

  return (
    <S.Wrapper>
      <S.StepsWrapper>
        {items.sort((a, b) => a.number - b.number).map(StepTemplate)}
      </S.StepsWrapper>
      <S.Line />
    </S.Wrapper>
  )
}
