import { render, screen } from '@/__tests__/helpers'

import { mainLayoutMock } from '@/presentation/layouts/main/mocks/data'

import './mocks'

import { PillarsSection } from '.'

const { getByRole, getByText, getByTestId } = screen

const mock = mainLayoutMock.pillarsSection

describe('<PillarsSection />', () => {
  it('should contain correct section id', () => {
    const { container } = render(<PillarsSection {...mock} />)

    const wrapper = container.firstChild

    expect(wrapper).toHaveAttribute('id', mock.id)
  })

  it('should render heading', () => {
    render(<PillarsSection {...mock} />)

    const heading = getByRole('heading', { name: mock.heading })

    expect(heading).toBeInTheDocument()
  })

  it('should render description', () => {
    render(<PillarsSection {...mock} />)

    const description = getByText(mock.description)

    expect(description).toBeInTheDocument()
  })

  it('should render pillars cards', () => {
    render(<PillarsSection {...mock} />)

    const methodologyCards = getByTestId('mock-methodology-cards')

    expect(methodologyCards).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<PillarsSection {...mock} />)

    expect(container).toMatchSnapshot()
  })
})
