import { vitest } from 'vitest'

vitest.mock('@/presentation/components/molecules', () => ({
  Header: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Header">{children}</div>
  },
}))
