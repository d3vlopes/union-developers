import { Slider, sliderOptions } from '@/libs/sliders/swiper'

import { TestimonialCardProps } from '@/presentation/components/molecules'

import { SliderItemTemplate } from './templates'

import * as S from './styles'

export interface TestimonialSliderProps {
  testimonials: TestimonialCardProps[]
}

export const TestimonialSlider = ({
  testimonials,
}: TestimonialSliderProps) => {
  return (
    <S.Wrapper>
      <Slider {...sliderOptions}>
        {testimonials.map(SliderItemTemplate)}
      </Slider>
    </S.Wrapper>
  )
}
