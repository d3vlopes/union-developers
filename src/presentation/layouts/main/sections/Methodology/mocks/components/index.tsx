import { vitest } from 'vitest'

vitest.mock('@/presentation/components/molecules', () => ({
  MethodologyCards: function Mock({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <div data-testid="mock-methodology-cards">{children}</div>
  },
}))
