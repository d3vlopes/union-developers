import { vitest } from 'vitest'

import { render, screen } from '@/__tests__/helpers'

import { accordionsMock } from './mock'

import { QuestionsAccordion } from '.'

const { getAllByTestId } = screen

vitest.mock('@/presentation/components/molecules', () => ({
  Accordion: function Mock({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <div data-testid="mock-accordion">{children}</div>
  },
}))

const mock = accordionsMock

describe('<QuestionsAccordion />', () => {
  it('should render many Accordions', () => {
    render(<QuestionsAccordion accordions={mock} />)

    const accordions = getAllByTestId('mock-accordion')

    expect(accordions).toHaveLength(mock.length)
  })
})
