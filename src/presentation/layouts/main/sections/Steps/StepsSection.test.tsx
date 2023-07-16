import { render, screen } from '@/__tests__/helpers'

import { mainLayoutMock } from '@/presentation/layouts/main/mocks/data'

import './mocks'

import { StepsSection } from '.'

const { getByRole, getByText, getByTestId } = screen

const mock = mainLayoutMock.stepsSection

describe('<StepsSection />', () => {
  it('should contain correct section id', () => {
    const { container } = render(<StepsSection {...mock} />)

    const wrapper = container.firstChild

    expect(wrapper).toHaveAttribute('id', mock.id)
  })

  it('should render heading', () => {
    render(<StepsSection {...mock} />)

    const heading = getByRole('heading', { name: 'Etapas' })

    expect(heading).toBeInTheDocument()
  })

  it('should render description', () => {
    render(<StepsSection {...mock} />)

    const description = getByText(mock.description)

    expect(description).toBeInTheDocument()
  })

  it('should render Steps', () => {
    render(<StepsSection {...mock} />)

    const steps = getByTestId('mock-steps')

    expect(steps).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<StepsSection {...mock} />)

    expect(container).toMatchSnapshot()
  })
})
