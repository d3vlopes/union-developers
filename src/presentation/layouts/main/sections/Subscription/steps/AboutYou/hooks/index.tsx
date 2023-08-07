/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'

import {
  handleAnalityClick,
  handleAnalitySubscriptions,
  monitoring,
} from '@/libs/monitoring'

import { useForm, zodResolver } from '@/libs/forms'

import { useSubscriptionForm } from '@/presentation/hooks'

import { SubscriptionResponse } from '@/api/models'

import { AboutYouStepType, aboutYouStepSchema } from '../schema'
import { PersonalInfoStepType } from '../../PersonalInfo/schema'
import { TechnicalInfoStepType } from '../../TechnicalInfo/schema'

import { autoSaveFormFields, formStepMap } from '../../../helpers'

type FormData = AboutYouStepType &
  PersonalInfoStepType &
  TechnicalInfoStepType

export const useAboutYouStep = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    formData,
    currentStepIndex,
    setIsSubscriptionSuccess,
    setFormData,
    handlePreviousStep: decreasesCurrentStepIndex,
    handleNextStep,
  } = useSubscriptionForm<FormData>()

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<AboutYouStepType>({
    defaultValues: {
      youMotivation: formData?.youMotivation,
      timeManagement: formData?.timeManagement,
      aboutFeedback: formData?.aboutFeedback,
      howDidYouKnow: formData?.howDidYouKnow,
      becauseParticipate: formData?.becauseParticipate,
      reasonForSelected: formData?.reasonForSelected,
      isTermsAccepted: false,
    },
    mode: 'onBlur',
    resolver: zodResolver(aboutYouStepSchema),
  })

  const { isTermsAccepted } = getValues()

  const handleOpenModal = () => {
    setIsOpenModal(true)

    handleAnalityClick({
      event_category: 'Click',
      event_label: 'Form',
      event_action: 'Clique para abrir os termos',
      value: 1,
    })
  }

  const handleCloseModal = () => setIsOpenModal(false)

  useEffect(() => {
    const formValues = getValues()

    const interval = autoSaveFormFields(
      formValues,
      formData,
      errors,
      setFormData,
      0,
    )

    return () => clearInterval(interval)
  }, [formData, errors, getValues, setFormData])

  async function onSubmit(data: AboutYouStepType) {
    if (isValid && isTermsAccepted) {
      try {
        setIsLoading(true)

        const response = await fetch('/api/subscription', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            formData,
          }),
        })

        const { payload }: SubscriptionResponse =
          await response.json()

        if (response.status !== 201) {
          throw new Error(payload?.error![0].message)
        }

        setIsSubscriptionSuccess(true)

        handleAnalitySubscriptions({
          event_category: 'Contagem de inscrições bem sucedidas',
          event_label: 'Form',
          event_action: 'Inscrição concluída com sucesso',
          value: 1,
        })
      } catch (error: any) {
        setIsSubscriptionSuccess(false)

        monitoring.captureMessage({
          category: 'form',
          message: `Failed subscription for user with name: ${formData.fullName}`,
          level: 'error',
          error: error,
        })

        handleAnalitySubscriptions({
          event_category: 'Contagem de inscrições com falha',
          event_label: 'Form',
          event_action: 'Inscrição com erro',
          value: 1,
        })
      } finally {
        setFormData({
          ...formData,
          ...data,
        })

        handleNextStep()

        setIsLoading(false)
      }
    }
  }

  function handlePreviousStep() {
    decreasesCurrentStepIndex()

    const previousStepIndex = currentStepIndex - 1
    const previousStep = formStepMap[previousStepIndex]

    handleAnalityClick({
      event_category: 'Click',
      event_label: 'Form',
      event_action: `Clique para para voltar para a etapa ${previousStep}`,
    })
  }

  return {
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
  }
}
