import { render, screen } from '@/__tests__/helpers'

import { methodologyCardsMock } from './mock'

import { MethodologyCards } from '.'

const { getByRole, getByText, getAllByRole } = screen

const cardMock = methodologyCardsMock[0]

describe('<MethodologyCards />', () => {
  it('should render heading', () => {
    render(<MethodologyCards items={methodologyCardsMock} />)

    const heading = getByRole('heading', {
      name: cardMock.title,
    })

    expect(heading).toBeInTheDocument()
  })

  it('should render description', () => {
    render(<MethodologyCards items={methodologyCardsMock} />)

    const description = getByText(cardMock.description)

    expect(description).toBeInTheDocument()
  })

  it('should render many cards', () => {
    render(<MethodologyCards items={methodologyCardsMock} />)

    const cardTitles = getAllByRole('heading')

    expect(cardTitles).toHaveLength(methodologyCardsMock.length)
  })

  it('should match snapshot', () => {
    const { container } = render(
      <MethodologyCards items={methodologyCardsMock} />,
    )

    expect(container).toMatchSnapshot()
  })
})
