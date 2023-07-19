import { vitest } from 'vitest'

import { render, screen } from '@/__tests__/helpers'

import { testimonialsMock } from './mock'

import { TestimonialSlider } from '.'

const mock = testimonialsMock

const { getAllByTestId } = screen

vitest.mock('@/presentation/components/molecules', () => ({
  TestimonialCard: function Mock({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <div data-testid="mock-testimonial-card">{children}</div>
  },
}))

describe('<TestimonialSlider />', () => {
  it('should render many TestimonialCards', () => {
    render(<TestimonialSlider testimonials={mock} />)
    const testimonialCards = getAllByTestId('mock-testimonial-card')

    expect(testimonialCards).toHaveLength(mock.length)
  })
})
