import { StepsSectionType } from '@/domain/models'

import { Headline } from '@/presentation/components/atoms'
import { Steps } from '@/presentation/components/molecules'

import * as S from './styles'

export const StepsSection = ({
  id,
  heading,
  description,
  steps,
}: StepsSectionType) => {
  return (
    <S.Wrapper id={id}>
      <Headline>{heading}</Headline>
      <S.Description>{description}</S.Description>
      <S.StepsWrapper>
        <Steps steps={steps} />
      </S.StepsWrapper>
    </S.Wrapper>
  )
}
