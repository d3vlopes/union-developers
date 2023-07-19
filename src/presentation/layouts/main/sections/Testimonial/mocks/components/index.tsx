import { vitest } from 'vitest'

vitest.mock('@/presentation/components/organisms', () => ({
  TestimonialSlider: function Mock({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <div data-testid="mock-testimonial-slider">{children}</div>
  },
}))
