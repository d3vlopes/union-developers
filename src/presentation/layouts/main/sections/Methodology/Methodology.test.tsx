import { render, screen } from '@/__tests__/helpers'

import { mainLayoutMock } from '@/presentation/layouts/main/mocks/data'

import './mocks'

import { MethodologySection } from '.'

const { getByRole, getByText, getByTestId } = screen

const mock = mainLayoutMock.methodologySection

describe('<MethodologySection />', () => {
  it('should contain correct section id', () => {
    const { container } = render(<MethodologySection {...mock} />)

    const wrapper = container.firstChild

    expect(wrapper).toHaveAttribute('id', mock.id)
  })

  it('should render heading', () => {
    render(<MethodologySection {...mock} />)

    const heading = getByRole('heading', { name: 'Metodologias' })

    expect(heading).toBeInTheDocument()
  })

  it('should render description', () => {
    render(<MethodologySection {...mock} />)

    const description = getByText(mock.description)

    expect(description).toBeInTheDocument()
  })

  it('should render methodology cards', () => {
    render(<MethodologySection {...mock} />)

    const methodologyCards = getByTestId('mock-methodology-cards')

    expect(methodologyCards).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<MethodologySection {...mock} />)

    expect(container).toMatchSnapshot()
  })
})
