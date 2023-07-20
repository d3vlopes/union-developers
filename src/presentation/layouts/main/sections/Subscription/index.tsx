import { useState } from 'react'

import { InitialStep, PersonalInfoStep } from './steps'

import * as S from './styles'

export interface SubscriptionSectionProps {
  id: string
  title: string
  description: string
  requirements: string[]
  buttonText: string
}

export const SubscriptionSection = ({
  id,
  title,
  description,
  requirements,
  buttonText,
}: SubscriptionSectionProps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  function handleNextStep() {
    setCurrentStepIndex((prevState) => prevState + 1)
  }

  return (
    <S.Wrapper id={id}>
      <S.Title>{title}</S.Title>
      {currentStepIndex === 0 && (
        <InitialStep
          description={description}
          requirements={requirements}
          buttonText={buttonText}
          handleNextStep={handleNextStep}
        />
      )}
      {currentStepIndex === 1 && <PersonalInfoStep />}
    </S.Wrapper>
  )
}
