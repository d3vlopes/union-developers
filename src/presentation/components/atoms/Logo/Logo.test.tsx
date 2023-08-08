import { render, screen } from '@/__tests__/helpers'

import { logoMock } from './mock'

import { Logo } from '.'

const { getByRole } = screen

describe('<Logo />', () => {
  it('should correct alt', () => {
    render(<Logo {...logoMock} />)

    const logo = getByRole('img')

    expect(logo).toHaveAttribute('alt', logoMock.alt)
  })

  it('should correct src', () => {
    render(<Logo {...logoMock} />)

    const logo = getByRole('img')

    expect(logo).toHaveAttribute('src', logoMock.imgUrl)
  })

  it('should render <a> element around <img> with correct href for target', () => {
    render(<Logo {...logoMock} />)

    const link = getByRole('link')

    expect(link).toHaveAttribute('href', '#')
  })

  it('should match snapshot', () => {
    const { container } = render(<Logo {...logoMock} />)

    expect(container).toMatchSnapshot()
  })
})
