import { render, screen } from '@/__tests__/helpers'

import { mainLayoutMock } from '@/presentation/layouts/main/mocks/data'

import { AboutSection } from '.'

const { getByRole, getByText } = screen

const mock = mainLayoutMock.aboutSection

describe('<AboutSection />', () => {
  it('should contain correct section id', () => {
    const { container } = render(<AboutSection {...mock} />)

    const wrapper = container.firstChild

    expect(wrapper).toHaveAttribute('id', mock.id)
  })

  it('should render heading', () => {
    render(<AboutSection {...mock} />)

    const heading = getByRole('heading', { name: mock.heading })

    expect(heading).toBeInTheDocument()
  })

  it('should render description', () => {
    render(<AboutSection {...mock} />)

    const description = getByText(mock.description)

    expect(description).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<AboutSection {...mock} />)

    expect(container).toMatchSnapshot()
  })
})
