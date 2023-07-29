import { useSubscriptionForm } from '@/presentation/hooks'

import { Button } from '@/presentation/components/atoms'

import { SubscriptionSectionProps } from '../..'

import * as S from './styles'

export type InitialStepProps = Pick<
  SubscriptionSectionProps,
  'requirements' | 'buttonText'
>

export const InitialStep = ({
  requirements,
  buttonText,
}: InitialStepProps) => {
  const { handleNextStep } = useSubscriptionForm()

  return (
    <>
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
