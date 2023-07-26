/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import * as z from 'zod'

import { useSubscriptionForm } from '@/presentation/hooks'

import { Button, Input } from '@/presentation/components/atoms'

import * as S from '../styles'

const requiredError = {
  required_error: 'Campo obrigatório',
}

const personalInfoStepSchema = z.object({
  fullName: z
    .string(requiredError)
    .min(1, { message: 'Campo obrigatório' }),
  age: z
    .number({
      ...requiredError,
      invalid_type_error: 'Campo obrigatório',
    })
    .min(18, {
      message: 'É necessário ter no mínimo 18 anos para participar',
    }),
})

type PersonalInfoStepType = z.infer<typeof personalInfoStepSchema>

export const TechnicalInformationStep = () => {
  const {
    handleNextStep,
    handlePreviousStep,
    formData,
    setFormData,
  } = useSubscriptionForm()

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<PersonalInfoStepType>({
  //   mode: 'onBlur',
  //   resolver: zodResolver(personalInfoStepSchema),
  // })

  // function onSubmit(data: PersonalInfoStepType) {
  //   const isError = errors === undefined

  //   if (isError) {
  //     return
  //   }

  //   setFormData({ ...formData, ...data })

  //   handleNextStep()
  // }

  return (
    <S.FormWrapper>
      <S.FormField>
        <label htmlFor="fullName">
          Quanto tempo você estuda programação?
        </label>
        <Input
          id="fullName"
          // error={errors.fullName?.message}
          // placeholder="Qual seu nome completo?"
          // {...register('fullName')}
        />
      </S.FormField>

      <S.ButtonsWrapper>
        <Button
          type="button"
          variant="secondary"
          onClick={handlePreviousStep}
        >
          Voltar
        </Button>
        {/* <Button type="button" onClick={handleSubmit(onSubmit)}>
          Próximo
        </Button> */}
      </S.ButtonsWrapper>
    </S.FormWrapper>
  )
}
