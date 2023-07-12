import { vitest } from 'vitest'

vitest.mock('@/presentation/components/molecules', () => ({
  Highlights: function Mock({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <div data-testid="mock-highlights">{children}</div>
  },
}))
