import { render, screen } from '@/__tests__/helpers'

import { mainLayoutMock } from '@/presentation/layouts/main/mocks/data'

import './mocks'

import { HighlightSection } from '.'

const { getByRole, getByText, getByTestId } = screen

const mock = mainLayoutMock.highlightSection

describe('<HighlightSection />', () => {
  it('should render heading', () => {
    render(<HighlightSection {...mock} />)

    const heading = getByRole('heading', { name: mock.heading })

    expect(heading).toBeInTheDocument()
  })

  it('should render description', () => {
    render(<HighlightSection {...mock} />)

    const description = getByText(mock.description)

    expect(description).toBeInTheDocument()
  })

  it('should render Highlights', () => {
    render(<HighlightSection {...mock} />)

    const highlights = getByTestId('mock-highlights')

    expect(highlights).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<HighlightSection {...mock} />)

    expect(container).toMatchSnapshot()
  })
})
