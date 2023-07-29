import { useEffect } from 'react'

import { useForm, zodResolver } from '@/libs/forms'

import { useSubscriptionForm } from '@/presentation/hooks'

import { autoSaveFormFields } from '../../../helpers'

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
    const formValues = getValues()

    const interval = autoSaveFormFields(
      formValues,
      formData,
      errors,
      setFormData,
    )

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
