import { useSubscriptionForm } from '@/presentation/hooks'

import { FormStepNavLnk } from '../..'

import * as S from '../../styles'

interface FormStepNavLinksRenderProps {
  formStepNavLinks: FormStepNavLnk[]
}

export const FormStepNavLinks = ({
  formStepNavLinks,
}: FormStepNavLinksRenderProps) => {
  const { currentStepIndex } = useSubscriptionForm()

  return (
    <S.Nav>
      <ul>
        {formStepNavLinks.map(({ id, stepNumber, stepTitle }) => {
          const isActive = currentStepIndex >= stepNumber
          const isCurrent = currentStepIndex === stepNumber

          return (
            <S.NavLink
              key={id}
              active={isActive}
              data-testid={`${
                isActive
                  ? `step-${stepNumber}-active`
                  : `step-${stepNumber}-disabled`
              }`}
            >
              <S.StepTitle aria-current={isCurrent}>
                {stepTitle}
              </S.StepTitle>
              <S.StepNumber aria-label={`Etapa ${stepNumber}`}>
                {stepNumber}
              </S.StepNumber>
            </S.NavLink>
          )
        })}
      </ul>
    </S.Nav>
  )
}
