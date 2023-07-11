import { render, screen } from '@/__tests__/helpers'

import { mainLayoutMock } from '@/presentation/layouts/main/mocks/data'

import './mocks'

import { MethodologySection } from '.'

const { getByRole, getByText, getByTestId } = screen

describe('<MethodologySection />', () => {
  it('should render heading', () => {
    render(
      <MethodologySection {...mainLayoutMock.methodologySection} />,
    )

    const heading = getByRole('heading', { name: 'Metodologias' })

    expect(heading).toBeInTheDocument()
  })

  it('should render description', () => {
    render(
      <MethodologySection {...mainLayoutMock.methodologySection} />,
    )

    const description = getByText(
      mainLayoutMock.methodologySection.description,
    )

    expect(description).toBeInTheDocument()
  })

  it('should render methodology cards', () => {
    render(
      <MethodologySection {...mainLayoutMock.methodologySection} />,
    )

    const methodologyCards = getByTestId('mock-methodology-cards')

    expect(methodologyCards).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(
      <MethodologySection {...mainLayoutMock.methodologySection} />,
    )

    expect(container).toMatchSnapshot()
  })
})
