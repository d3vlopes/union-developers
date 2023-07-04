import { render, screen } from '@/__tests__/helpers'

import { baseLayoutMock } from './mocks'

import { BaseLayout } from '.'

const { getByTestId, getByRole } = screen

describe('<BaseLayout />', () => {
  it('should render Header', () => {
    render(<BaseLayout {...baseLayoutMock}>Children</BaseLayout>)

    const header = getByTestId('Mock Header')

    expect(header).toBeInTheDocument()
  })

  it('should render children with main', () => {
    render(<BaseLayout {...baseLayoutMock}>Children</BaseLayout>)

    const main = getByRole('main')

    expect(main).toBeInTheDocument()
  })
})
