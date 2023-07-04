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
