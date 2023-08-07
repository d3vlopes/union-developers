import { useEffect } from 'react'

import { useForm, zodResolver } from '@/libs/forms'
import { handleAnalityClick } from '@/libs/monitoring'

import { useSubscriptionForm } from '@/presentation/hooks'

import { autoSaveFormFields, formStepMap } from '../../../helpers'

import {
  TechnicalInfoStepType,
  technicalInfoStepSchema,
} from '../schema'

export const useTechnicalInfo = () => {
  const {
    handleNextStep,
    handlePreviousStep: decreasesCurrentStepIndex,
    formData,
    currentStepIndex,
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

      const nextStepIndex = currentStepIndex + 1
      const nextStep = formStepMap[nextStepIndex]

      handleAnalityClick({
        event_category: 'Click',
        event_label: 'Form',
        event_action: `Clique para para ir para a etapa ${nextStep}`,
      })
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
    isValid,
    register,
    onSubmit,
    handleSubmit,
    handlePreviousStep,
  }
}
