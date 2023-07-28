/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { useEffect, useState } from 'react'

import { useForm, zodResolver } from '@/libs/forms'

import { useSubscriptionForm } from '@/presentation/hooks'

import { AboutYouStepType, aboutYouStepSchema } from '../schema'

import { autoSaveFormFields } from '../../../helpers'

export const useAboutYouStep = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    formData,
    setIsSubscriptionSuccess,
    setFormData,
    handlePreviousStep,
    handleNextStep,
  } = useSubscriptionForm<AboutYouStepType>()

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

        await new Promise((resolve) => setTimeout(resolve, 1500))

        setFormData({
          ...formData,
          ...data,
        })

        setIsSubscriptionSuccess(true)

        handleNextStep()

        // TODO: register subscription
      } catch (error: any) {
        setFormData({
          ...formData,
          ...data,
        })

        setIsSubscriptionSuccess(false)

        console.error('Error =>', error)
      } finally {
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
