import { render, screen } from '@/__tests__/helpers'

import { highlightsMock } from './mock'

import { Highlights } from '.'

const { getByRole, getByText, getAllByRole } = screen

const highlightMock = highlightsMock[0]

describe('<Highlights />', () => {
  it('should render icon', () => {
    render(<Highlights items={highlightsMock} />)

    const icon = getByRole('img', { name: highlightMock.icon.alt })

    expect(icon).toHaveAttribute('src', highlightMock.icon.url)
  })

  it('should render title', () => {
    render(<Highlights items={highlightsMock} />)

    const title = getByRole('heading', { name: highlightMock.title })

    expect(title).toBeInTheDocument()
  })

  it('should render description', () => {
    render(<Highlights items={highlightsMock} />)

    const description = getByText(highlightMock.description)

    expect(description).toBeInTheDocument()
  })

  it('should render many highlights', () => {
    render(<Highlights items={highlightsMock} />)

    const highlightTitles = getAllByRole('heading')

    expect(highlightTitles).toHaveLength(highlightsMock.length)
  })

  it('should match snapshot', () => {
    const { container } = render(
      <Highlights items={highlightsMock} />,
    )

    expect(container).toMatchSnapshot()
  })
})
