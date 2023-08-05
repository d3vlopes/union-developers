/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'

import { monitoring } from '@/libs/monitoring'

import { useForm, zodResolver } from '@/libs/forms'

import { useSubscriptionForm } from '@/presentation/hooks'

import { SubscriptionResponse } from '@/api/models'

import { AboutYouStepType, aboutYouStepSchema } from '../schema'
import { PersonalInfoStepType } from '../../PersonalInfo/schema'
import { TechnicalInfoStepType } from '../../TechnicalInfo/schema'

import { autoSaveFormFields } from '../../../helpers'

type FormData = AboutYouStepType &
  PersonalInfoStepType &
  TechnicalInfoStepType

export const useAboutYouStep = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    formData,
    setIsSubscriptionSuccess,
    setFormData,
    handlePreviousStep,
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

  const handleOpenModal = () => setIsOpenModal(true)
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

        const { message, payload }: SubscriptionResponse =
          await response.json()

        if (response.status !== 201) {
          throw new Error(payload?.error![0].message)
        }

        setIsSubscriptionSuccess(true)

        monitoring.captureMessage({
          category: 'form',
          message: `Create subscription with id: ${
            payload?.data!.createSubscriptionForm?.id
          }`,
          logMessage: message,
          level: 'log',
          user: { email: formData.email },
        })
      } catch (error: any) {
        setIsSubscriptionSuccess(false)

        monitoring.captureMessage({
          category: 'form',
          message: `Failed subscription for user with name: ${formData.fullName}`,
          level: 'error',
          error: error,
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
