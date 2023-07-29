import { TermModel } from '@/domain/models'

import { useSubscriptionForm } from '@/presentation/hooks'

import {
  InitialStep,
  PersonalInfoStep,
  TechnicalInfoStep,
  AboutYouStep,
  SendStep,
} from './steps'

import { FormStepNavLinks } from './components'

import * as S from './styles'

export interface FormStepNavLnk {
  id: string
  stepTitle: string
  stepNumber: number
}

export interface SubscriptionSectionProps {
  id: string
  title: string
  initialStepDescription: string
  formStepsDescription: string
  requirements: string[]
  buttonText: string
  formStepNavLinks: FormStepNavLnk[]
  terms: TermModel
}

export const SubscriptionSection = ({
  id,
  title,
  initialStepDescription,
  formStepsDescription,
  requirements,
  buttonText,
  formStepNavLinks,
  terms,
}: SubscriptionSectionProps) => {
  const { currentStepIndex } = useSubscriptionForm()

  return (
    <S.Wrapper id={id}>
      <S.Title>{title}</S.Title>
      <S.Description stepIndex={currentStepIndex}>
        {currentStepIndex === 0
          ? initialStepDescription
          : formStepsDescription}
      </S.Description>

      {currentStepIndex === 0 && (
        <InitialStep
          requirements={requirements}
          buttonText={buttonText}
        />
      )}

      {currentStepIndex > 0 && (
        <FormStepNavLinks formStepNavLinks={formStepNavLinks} />
      )}

      {currentStepIndex === 1 && <PersonalInfoStep />}
      {currentStepIndex === 2 && <TechnicalInfoStep />}
      {currentStepIndex === 3 && <AboutYouStep terms={terms} />}
      {currentStepIndex === 4 && <SendStep />}
    </S.Wrapper>
  )
}
