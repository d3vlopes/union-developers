import { useEffect } from 'react'

import { useForm, z, zodResolver } from '@/libs/forms'

import { useSubscriptionForm } from '@/presentation/hooks'

import { autoSaveFormFields } from '../../../helpers'

import { personalInfoStepSchema } from '../schema'

export type PersonalInfoStepType = z.infer<
  typeof personalInfoStepSchema
>

export const usePersonalInfoStep = () => {
  const {
    handleNextStep,
    handlePreviousStep,
    formData,
    setFormData,
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
    }
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
