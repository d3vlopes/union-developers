import { vitest } from 'vitest'

vitest.mock('@/presentation/components/organisms', () => ({
  QuestionsAccordion: function Mock({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div data-testid="mock-questions-accordion">{children}</div>
    )
  },
}))
