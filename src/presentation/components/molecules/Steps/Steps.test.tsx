import { render, screen } from '@/__tests__/helpers'

import { stepsMock } from './mock'

import { Steps } from '.'

const { getByRole, getByText, getAllByRole } = screen

const mock = stepsMock[0]

describe('<Steps />', () => {
  it('should render step title', () => {
    render(<Steps steps={stepsMock} />)

    const stepTitle = getByRole('heading', { name: mock.title })

    expect(stepTitle).toBeInTheDocument()
  })

  it('should render description step', () => {
    render(<Steps steps={stepsMock} />)

    const stepDescription = getByText(mock.description)

    expect(stepDescription).toBeInTheDocument()
  })

  it('should render number step', () => {
    render(<Steps steps={stepsMock} />)

    const stepNumber = getByText(mock.number)

    expect(stepNumber).toBeInTheDocument()
  })

  it('should render many steps', () => {
    render(<Steps steps={stepsMock} />)

    const stepTitles = getAllByRole('heading')

    expect(stepTitles).toHaveLength(stepsMock.length)
  })

  it('should match snapshot', () => {
    const { container } = render(<Steps steps={stepsMock} />)

    expect(container).toMatchSnapshot()
  })
})
