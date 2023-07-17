import { render, screen } from '@/__tests__/helpers'

import { rememberActionMock } from './mock'

import { RememberAction } from '.'

const { getByRole } = screen

describe('<RememberAction />', () => {
  beforeEach(() => {
    render(<RememberAction {...rememberActionMock} />)
  })

  it('should render heading', () => {
    const heading = getByRole('heading', {
      name: rememberActionMock.title,
    })

    expect(heading).toBeInTheDocument()
  })

  it('should render subtitle', () => {
    const subtitle = getByRole('heading', {
      name: rememberActionMock.subtitle,
    })

    expect(subtitle).toBeInTheDocument()
  })

  it('should render button', () => {
    const button = getByRole('button', {
      name: rememberActionMock.buttonText,
    })

    expect(button).toBeInTheDocument()
  })

  it('should render logo', () => {
    const logo = getByRole('img', {
      name: rememberActionMock.logoAlt,
    })

    expect(logo).toBeInTheDocument()
  })

  it('should render logo with correct src value', () => {
    const logo = getByRole('img', {
      name: rememberActionMock.logoAlt,
    })

    expect(logo).toHaveAttribute('src', rememberActionMock.logoUrl)
  })

  it('should render anchor under button with href for button target value', () => {
    const anchor = getByRole('link')

    expect(anchor).toHaveAttribute(
      'href',
      rememberActionMock.buttonTarget,
    )
  })
})
