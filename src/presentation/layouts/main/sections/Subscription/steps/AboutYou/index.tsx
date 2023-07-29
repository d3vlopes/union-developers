/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Suspense, lazy } from 'react'

import { TermModel } from '@/domain/models'

import {
  Button,
  Checkbox,
  Textarea,
} from '@/presentation/components/atoms'

import { Terms } from './components'

import { useAboutYouStep } from './hooks'

import * as S from '../styles'

const Modal = lazy(() =>
  import('@/presentation/components/molecules').then((module) => ({
    default: module.Modal,
  })),
)

interface AboutYouStepProps {
  terms: TermModel
}

export const AboutYouStep = ({ terms }: AboutYouStepProps) => {
  const {
    errors,
    isTermsAccepted,
    isOpenModal,
    isValid,
    isLoading,
    register,
    onSubmit,
    handleSubmit,
    handleOpenModal,
    handleCloseModal,
    handlePreviousStep,
  } = useAboutYouStep()

  return (
    <S.FormWrapper>
      <S.FormField>
        <S.LabelWrapper>
          <span>*</span>
          <label htmlFor="youMotivation">
            Por que você gosta de programar? Qual sua maior motivação?
          </label>
        </S.LabelWrapper>

        <Textarea
          id="youMotivation"
          error={errors.youMotivation?.message}
          placeholder="Qual é a sua maior motivação para fazer o que faz?"
          {...register('youMotivation')}
        />
      </S.FormField>

      <S.FormField>
        <S.LabelWrapper>
          <span>*</span>
          <label htmlFor="timeManagement">
            Como você faz para conseguir cumprir todos as suas
            responsabilidades do dia a dia?
          </label>
        </S.LabelWrapper>

        <Textarea
          id="timeManagement"
          error={errors.timeManagement?.message}
          placeholder="Como você faz para conseguir cumprir todos as suas responsabilidades do dia a dia?"
          {...register('timeManagement')}
        />
      </S.FormField>

      <S.FormField>
        <S.LabelWrapper>
          <span>*</span>
          <label htmlFor="aboutFeedback">
            Quando você recebe um feedback, como é para você?
          </label>
        </S.LabelWrapper>

        <Textarea
          id="aboutFeedback"
          error={errors.aboutFeedback?.message}
          placeholder="Nos conte como é para você receber feedback?"
          {...register('aboutFeedback')}
        />
      </S.FormField>

      <S.FormField>
        <S.LabelWrapper>
          <span>*</span>
          <label htmlFor="howDidYouKnow">
            Como você ficou sabendo sobre o Union?
          </label>
        </S.LabelWrapper>

        <Textarea
          id="howDidYouKnow"
          error={errors.howDidYouKnow?.message}
          placeholder="Como você ficou sabendo sobre o Union?"
          {...register('howDidYouKnow')}
        />
      </S.FormField>

      <S.FormField>
        <S.LabelWrapper>
          <span>*</span>
          <label htmlFor="becauseParticipate">
            Por que você quer fazer parte do Union?
          </label>
        </S.LabelWrapper>

        <Textarea
          id="becauseParticipate"
          error={errors.becauseParticipate?.message}
          placeholder="Por que você quer fazer parte do Union?"
          {...register('becauseParticipate')}
        />
      </S.FormField>

      <S.FormField>
        <S.LabelWrapper>
          <span>*</span>
          <label htmlFor="reasonForSelected">
            Por que você deveria fazer parte do pequeno grupo que vai
            ter a oportunidade de participar do Union?
          </label>
        </S.LabelWrapper>

        <Textarea
          id="reasonForSelected"
          error={errors.reasonForSelected?.message}
          placeholder="Por que você deveria fazer parte do pequeno grupo que vai ter a oportunidade de participar do Union?"
          {...register('reasonForSelected')}
        />
      </S.FormField>

      <S.FormField>
        <S.TermsWrapper>
          <Checkbox id="terms" {...register('isTermsAccepted')} />
          <label htmlFor="terms">Li e concordo com os </label>
          <button type="button" onClick={handleOpenModal}>
            <a>termos</a>
          </button>
          .
        </S.TermsWrapper>

        {isTermsAccepted !== true && (
          <S.TermsError>
            <span>Os termos devem ser aceito</span>
          </S.TermsError>
        )}
      </S.FormField>

      <Suspense fallback={<div />}>
        <Modal isOpen={isOpenModal} onRequestClose={handleCloseModal}>
          <Terms {...terms} />
        </Modal>
      </Suspense>

      <S.ButtonsWrapper>
        <Button
          type="button"
          variant="secondary"
          onClick={handlePreviousStep}
        >
          Voltar
        </Button>

        <Button
          type="button"
          disabled={!isValid || isLoading}
          onClick={handleSubmit(onSubmit)}
        >
          {isLoading ? 'Processando...' : 'Enviar'}
        </Button>
      </S.ButtonsWrapper>
    </S.FormWrapper>
  )
}
