import { Button } from '@/presentation/components/atoms'

import { SubscriptionSectionProps } from '../..'

import * as S from './styles'

export type InitialStepProps = Pick<
  SubscriptionSectionProps,
  'description' | 'requirements' | 'buttonText'
> & {
  handleNextStep: () => void
}

export const InitialStep = ({
  description,
  requirements,
  buttonText,
  handleNextStep,
}: InitialStepProps) => {
  return (
    <>
      <S.Description>{description}</S.Description>
      <S.List>
        {requirements.map((requirement) => (
          <S.RequirementWrapper key={requirement}>
            <img
              src="https://media.graphassets.com/9YpETKdFREqKQa2wztob"
              alt="Ícone de um check"
            />
            <li>{requirement}</li>
          </S.RequirementWrapper>
        ))}
      </S.List>

      <Button onClick={handleNextStep}>{buttonText}</Button>
    </>
  )
}
