import { render, screen } from '@/__tests__/helpers'

import { subscriptionMock } from './mock'

import { SubscriptionSection } from '.'

const { getByRole } = screen

const mock = subscriptionMock

describe('<SubscriptionSection />', () => {
  beforeEach(() => {
    render(<SubscriptionSection {...mock} />)
  })

  it('should contain correct section id', () => {
    const { container } = render(<SubscriptionSection {...mock} />)

    const wrapper = container.firstChild

    expect(wrapper).toHaveAttribute('id', mock.id)
  })

  it('should render heading', () => {
    const heading = getByRole('heading', {
      name: mock.title,
    })

    expect(heading).toBeInTheDocument()
  })
})
