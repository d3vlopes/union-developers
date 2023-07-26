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
