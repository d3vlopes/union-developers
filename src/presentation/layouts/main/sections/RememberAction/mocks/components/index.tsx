import { vitest } from 'vitest'

vitest.mock(
  '@/presentation/components/molecules/RememberAction',
  () => ({
    RememberAction: function Mock({
      children,
    }: {
      children: React.ReactNode
    }) {
      return <div data-testid="mock-remember-action">{children}</div>
    },
  }),
)
