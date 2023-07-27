import { vitest } from 'vitest'

vitest.mock(
  '@/presentation/layouts/main/sections/Subscription/steps/Initial',
  () => ({
    InitialStep: function Mock({
      children,
    }: {
      children: React.ReactNode
    }) {
      return (
        <div data-testid="mock-subscription-initial-step">
          {children}
        </div>
      )
    },
  }),
)

vitest.mock(
  '@/presentation/layouts/main/sections/Subscription/steps/PersonalInfo',
  () => ({
    PersonalInfoStep: function Mock({
      children,
    }: {
      children: React.ReactNode
    }) {
      return (
        <div data-testid="mock-subscription-personal-info-step">
          {children}
        </div>
      )
    },
  }),
)

vitest.mock(
  '@/presentation/layouts/main/sections/Subscription/steps/TechnicalInfo',
  () => ({
    TechnicalInfoStep: function Mock({
      children,
    }: {
      children: React.ReactNode
    }) {
      return (
        <div data-testid="mock-subscription-technical-info-step">
          {children}
        </div>
      )
    },
  }),
)
