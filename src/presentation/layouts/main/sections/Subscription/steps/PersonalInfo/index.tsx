import { Button, Input } from '@/presentation/components/atoms'

import { usePersonalInfoStep } from './hooks'

import * as S from '../styles'

export const PersonalInfoStep = () => {
  const {
    errors,
    isValid,
    register,
    handlePreviousStep,
    handleSubmit,
    onSubmit,
  } = usePersonalInfoStep()

  return (
    <S.FormWrapper>
      <S.FormField>
        <S.LabelWrapper>
          <span>*</span>
          <label htmlFor="fullName">Nome completo</label>
        </S.LabelWrapper>

        <Input
          id="fullName"
          error={errors.fullName?.message}
          placeholder="Qual seu nome completo?"
          {...register('fullName')}
        />
      </S.FormField>

      <S.FormField>
        <S.LabelWrapper>
          <span>*</span>
          <label htmlFor="age">Idade</label>
        </S.LabelWrapper>

        <Input
          id="age"
          type="number"
          error={errors.age?.message}
          placeholder="Qual sua idade?"
          {...register('age', { valueAsNumber: true })}
        />
      </S.FormField>

      <S.FormField>
        <S.LabelWrapper>
          <span>*</span>
          <label htmlFor="email">Email</label>
        </S.LabelWrapper>

        <Input
          id="email"
          type="email"
          error={errors.email?.message}
          placeholder="Qual seu email de contato?"
          {...register('email')}
        />
      </S.FormField>

      <S.FormField>
        <S.LabelWrapper>
          <span>*</span>
          <label htmlFor="github">Github</label>
        </S.LabelWrapper>

        <Input
          id="github"
          type="text"
          error={errors.github?.message}
          placeholder="Qual seu Github?"
          {...register('github')}
        />
      </S.FormField>

      <S.FormField>
        <S.LabelWrapper>
          <span>*</span>
          <label htmlFor="linkedin">Linkedin</label>
        </S.LabelWrapper>

        <Input
          id="linkedin"
          type="text"
          error={errors.linkedin?.message}
          placeholder="Qual seu Linkedin?"
          {...register('linkedin')}
        />
      </S.FormField>

      <S.FormField>
        <S.LabelWrapper>
          <span>*</span>
          <label htmlFor="developmentSide">
            Onde você gosta mais de trabalhar?
          </label>
        </S.LabelWrapper>

        <S.RadioWrapper>
          <S.Radio
            id="frontend"
            type="radio"
            value="frontend"
            {...register('developmentSide')}
          />
          <label htmlFor="frontend">Frontend</label>
        </S.RadioWrapper>

        <S.RadioWrapper>
          <S.Radio
            id="backend"
            type="radio"
            value="backend"
            {...register('developmentSide')}
          />
          <label htmlFor="backend">Backend</label>
        </S.RadioWrapper>
      </S.FormField>

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
          disabled={!isValid}
          onClick={handleSubmit(onSubmit)}
        >
          Próximo
        </Button>
      </S.ButtonsWrapper>
    </S.FormWrapper>
  )
}
