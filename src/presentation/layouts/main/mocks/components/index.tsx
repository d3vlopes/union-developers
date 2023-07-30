import { vitest } from 'vitest'

vitest.mock('@/presentation/layouts', () => ({
  BaseLayout: function Mock({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <div data-testid="mock-base-layout">{children}</div>
  },
}))

vitest.mock('@/presentation/components/molecules', () => ({
  Hero: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="mock-hero">{children}</div>
  },
}))

vitest.mock('@/presentation/layouts/main/sections/About', () => ({
  AboutSection: function Mock({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <div data-testid="mock-about-section">{children}</div>
  },
}))

vitest.mock('@/presentation/layouts/main/sections/Pillars', () => ({
  PillarsSection: function Mock({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <div data-testid="mock-pillars-section">{children}</div>
  },
}))

vitest.mock('@/presentation/layouts/main/sections/Highlight', () => ({
  HighlightSection: function Mock({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <div data-testid="mock-highlight-section">{children}</div>
  },
}))

vitest.mock('@/presentation/layouts/main/sections/Steps', () => ({
  StepsSection: function Mock({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <div data-testid="mock-steps-section">{children}</div>
  },
}))

vitest.mock(
  '@/presentation/layouts/main/sections/RememberAction',
  () => ({
    RememberActionSection: function Mock({
      children,
    }: {
      children: React.ReactNode
    }) {
      return (
        <div data-testid="mock-remember-action-section">
          {children}
        </div>
      )
    },
  }),
)

vitest.mock(
  '@/presentation/layouts/main/sections/Testimonial',
  () => ({
    TestimonialSection: function Mock({
      children,
    }: {
      children: React.ReactNode
    }) {
      return (
        <div data-testid="mock-testimonial-section">{children}</div>
      )
    },
  }),
)

vitest.mock(
  '@/presentation/layouts/main/sections/Subscription',
  () => ({
    SubscriptionSection: function Mock({
      children,
    }: {
      children: React.ReactNode
    }) {
      return (
        <div data-testid="mock-subscription-section">{children}</div>
      )
    },
  }),
)

vitest.mock('@/presentation/layouts/main/sections/Faq', () => ({
  FaqSection: function Mock({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <div data-testid="mock-faq-section">{children}</div>
  },
}))
