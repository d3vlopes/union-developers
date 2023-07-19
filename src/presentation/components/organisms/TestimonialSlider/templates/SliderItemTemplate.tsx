import { SliderItem } from '@/libs/sliders/swiper'

import {
  TestimonialCard,
  TestimonialCardProps,
} from '@/presentation/components/molecules'

export const SliderItemTemplate = (
  testimonial: TestimonialCardProps,
) => {
  return (
    <SliderItem key={testimonial.id}>
      <TestimonialCard {...testimonial} />
    </SliderItem>
  )
}
