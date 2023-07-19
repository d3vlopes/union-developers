import { TestimonialSectionType } from '@/domain/models'

import { Headline } from '@/presentation/components/atoms'
import { TestimonialCardProps } from '@/presentation/components/molecules'
import { TestimonialSlider } from '@/presentation/components/organisms'

import * as S from './styles'

export const TestimonialSection = ({
  id,
  heading,
  description,
  testimonials,
}: TestimonialSectionType<TestimonialCardProps>) => {
  return (
    <S.Wrapper id={id}>
      <Headline>{heading}</Headline>
      <S.Description>{description}</S.Description>
      <S.TestimonialWrapper>
        <TestimonialSlider
          testimonials={testimonials.concat(testimonials)}
        />
      </S.TestimonialWrapper>
    </S.Wrapper>
  )
}
