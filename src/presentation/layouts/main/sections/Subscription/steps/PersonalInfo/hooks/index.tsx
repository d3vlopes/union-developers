import { useEffect } from 'react'

import { useForm, zodResolver } from '@/libs/forms'
import { handleAnalityClick } from '@/libs/monitoring'

import { useSubscriptionForm } from '@/presentation/hooks'

import { autoSaveFormFields, formStepMap } from '../../../helpers'

import {
  PersonalInfoStepType,
  personalInfoStepSchema,
} from '../schema'

export const usePersonalInfoStep = () => {
  const {
    handleNextStep,
    formData,
    currentStepIndex,
    setFormData,
    handlePreviousStep: decreasesCurrentStepIndex,
  } = useSubscriptionForm<PersonalInfoStepType>()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm<PersonalInfoStepType>({
    mode: 'onBlur',
    resolver: zodResolver(personalInfoStepSchema),
    defaultValues: {
      fullName: formData?.fullName,
      age: formData?.age,
      email: formData?.email,
      github: formData?.github,
      linkedin: formData?.linkedin,
      developmentSide: formData?.developmentSide,
    },
  })

  function onSubmit(data: PersonalInfoStepType) {
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

  return {
    handlePreviousStep,
    register,
    handleSubmit,
    onSubmit,
    getValues,
    isValid,
    errors,
  }
}
