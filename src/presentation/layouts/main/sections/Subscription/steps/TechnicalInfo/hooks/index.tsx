import { useEffect } from 'react'

import { useForm, zodResolver } from '@/libs/forms'

import { useSubscriptionForm } from '@/presentation/hooks'

import {
  TechnicalInfoStepType,
  technicalInfoStepSchema,
} from '../schema'

export const useTechnicalInfo = () => {
  const {
    handleNextStep,
    handlePreviousStep,
    formData,
    setFormData,
  } = useSubscriptionForm<TechnicalInfoStepType>()

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<TechnicalInfoStepType>({
    defaultValues: {
      timeLearning: formData?.timeLearning,
      linkRepoBestProject: formData?.linkRepoBestProject,
      aboutBestProject: formData?.aboutBestProject,
    },
    mode: 'onBlur',
    resolver: zodResolver(technicalInfoStepSchema),
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const formValues = getValues()

      const isFieldContainError = Object.keys(errors).length > 0

      if (!isFieldContainError) {
        setFormData({ ...formData, ...formValues })
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [formData, errors, getValues, setFormData])

  function onSubmit(data: TechnicalInfoStepType) {
    if (isValid) {
      setFormData({ ...formData, ...data })

      handleNextStep()
    }
  }

  return {
    errors,
    isValid,
    register,
    onSubmit,
    handleSubmit,
    handlePreviousStep,
  }
}
