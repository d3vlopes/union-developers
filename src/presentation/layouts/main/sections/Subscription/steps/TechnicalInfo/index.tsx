import {
  Button,
  Input,
  Textarea,
} from '@/presentation/components/atoms'

import { makeFormAnimation } from '../_shared/animations'

import { useTechnicalInfo } from './hooks'

import * as S from '../styles'

export const TechnicalInfoStep = () => {
  const {
    errors,
    isValid,
    register,
    onSubmit,
    handlePreviousStep,
    handleSubmit,
  } = useTechnicalInfo()

  const formWrapperAnimation = makeFormAnimation()

  return (
    <S.FormWrapper {...formWrapperAnimation}>
      <S.FormField>
        <S.LabelWrapper>
          <span>*</span>
          <label htmlFor="timeLearning">
            Quanto tempo você estuda programação?
          </label>
        </S.LabelWrapper>

        <S.RadioWrapper>
          <S.Radio
            id="option-one"
            type="radio"
            value="1 ano"
            {...register('timeLearning')}
          />
          <label htmlFor="option-one">1 ano</label>
        </S.RadioWrapper>

        <S.RadioWrapper>
          <S.Radio
            id="option-two"
            type="radio"
            value="2 anos"
            {...register('timeLearning')}
          />
          <label htmlFor="option-two">2 anos</label>
        </S.RadioWrapper>

        <S.RadioWrapper>
          <S.Radio
            id="option-three"
            type="radio"
            value="3 anos"
            {...register('timeLearning')}
          />
          <label htmlFor="option-three">3 anos</label>
        </S.RadioWrapper>

        <S.RadioWrapper>
          <S.Radio
            id="option-four"
            type="radio"
            value="Mais de 3 anos"
            {...register('timeLearning')}
          />
          <label htmlFor="option-four">Mais de 3 anos</label>
        </S.RadioWrapper>
      </S.FormField>

      <S.FormField>
        <S.LabelWrapper>
          <span>*</span>
          <label htmlFor="linkRepoBestProject">
            Link do repositório do seu melhor projeto
          </label>
        </S.LabelWrapper>

        <Input
          id="linkRepoBestProject"
          error={errors.linkRepoBestProject?.message}
          placeholder="Qual o link para o repositório do seu melhor projeto?"
          {...register('linkRepoBestProject')}
        />
      </S.FormField>

      <S.FormField>
        <S.LabelWrapper>
          <span>*</span>
          <label htmlFor="aboutBestProject">
            Fale sobre como foi construir esse projeto? Quais foram os
            aprendizados e dificuldades que teve durante o
            desenvolvimento?
          </label>
        </S.LabelWrapper>

        <Textarea
          id="aboutBestProject"
          error={errors.aboutBestProject?.message}
          placeholder="Fale sobre o seu melhor projeto, nos conte como foi trabalhar nesse projeto?"
          {...register('aboutBestProject')}
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
