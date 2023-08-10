import { StepModel } from '@/domain/models'

import { Step } from './components'

import * as S from './styles'

export interface StepsProps {
  steps: StepModel[]
}

export const Steps = ({ steps }: StepsProps) => {
  const items = [...steps]

  return (
    <S.Wrapper>
      <S.StepsWrapper>
        {items
          .sort((a, b) => a.number - b.number)
          .map((item) => (
            <Step key={item.id} item={item} />
          ))}
      </S.StepsWrapper>
      <S.Line />
    </S.Wrapper>
  )
}
