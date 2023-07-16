import { vitest } from 'vitest'

vitest.mock('@/presentation/components/molecules', () => ({
  Steps: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="mock-steps">{children}</div>
  },
}))
