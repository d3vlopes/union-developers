import { render, screen } from '@/__tests__/helpers'

import { logoMock } from './mock'

import { Logo } from '.'

const { getByLabelText, getByRole } = screen

describe('<Logo />', () => {
  it('should correct alt', () => {
    render(<Logo {...logoMock} />)

    const logo = getByLabelText('Union')

    expect(logo).toHaveAttribute('alt', logoMock.alt)
  })

  it('should correct src', () => {
    render(<Logo {...logoMock} />)

    const logo = getByLabelText('Union')

    expect(logo).toHaveAttribute('src', logoMock.imgUrl)
  })

  it('should render <a> element around <img> with href for /', () => {
    render(<Logo {...logoMock} />)

    const link = getByRole('link')

    expect(link).toHaveAttribute('href', '/')
  })

  it('should match snapshot', () => {
    const { container } = render(<Logo {...logoMock} />)

    expect(container).toMatchSnapshot()
  })
})
