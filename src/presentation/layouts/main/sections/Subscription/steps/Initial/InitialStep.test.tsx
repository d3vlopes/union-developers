import { vitest } from 'vitest'

import { render, screen } from '@/__tests__/helpers'

import { subscriptionMock } from '../../mock'

import { InitialStep, InitialStepProps } from '.'

const { getByRole, getByText } = screen

const mock: InitialStepProps = {
  ...subscriptionMock,
  handleNextStep: vitest.fn(),
}

describe('<InitialStep />', () => {
  beforeEach(() => {
    render(<InitialStep {...mock} />)
  })

  it('should render description', () => {
    const description = getByText(mock.description)

    expect(description).toBeInTheDocument()
  })

  it('should render requirements list', () => {
    mock.requirements.forEach((requirement) => {
      expect(getByText(requirement)).toBeInTheDocument()
    })
  })

  it('should render button', () => {
    const button = getByRole('button', { name: mock.buttonText })

    expect(button).toBeInTheDocument()
  })
})
