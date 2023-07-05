import { fireEvent, render, screen } from '@/__tests__/helpers'

import { headerMock } from './mock'

import { Header } from '.'

const {
  getByLabelText,
  getByText,
  getAllByRole,
  getByRole,
  getByTestId,
} = screen

describe('<Header />', () => {
  it('should render logo', () => {
    render(<Header {...headerMock} />)

    const logo = getByRole('img')

    expect(logo).toBeInTheDocument()
  })

  it('should render navigation links', () => {
    render(<Header {...headerMock} />)

    const { navigationLinks } = headerMock

    navigationLinks.forEach(async (item) => {
      const navigationAnchor = getByLabelText(item.label)
      const navigationItem = getByText(item.label)

      expect(navigationAnchor).toHaveAttribute(
        'href',
        `#${item.target}`,
      )
      expect(navigationItem).toBeInTheDocument()
    })
  })

  it('should render button', () => {
    render(<Header {...headerMock} />)

    const button = getByText(headerMock.buttonText)

    expect(button).toBeInTheDocument()
  })

  it('should render anchor under button with href for button target value', () => {
    render(<Header {...headerMock} />)

    const anchor = getByTestId('button-anchor')

    expect(anchor).toHaveAttribute('href', headerMock.buttonTarget)
  })

  it('should handle the open/close mobile menu ', () => {
    render(<Header {...headerMock} />)

    const [hamburgerButton] = getAllByRole('button')
    const navigation = getByLabelText('Navegação principal')

    expect(hamburgerButton).toHaveAttribute(
      'aria-label',
      'Abrir menu',
    )
    expect(navigation.getAttribute('aria-hidden')).toBe('true')
    expect(navigation).toHaveStyle({
      opacity: 0,
      visibility: 'hidden',
    })

    fireEvent.click(hamburgerButton)

    expect(hamburgerButton).toHaveAttribute(
      'aria-label',
      'Fechar menu',
    )
    expect(navigation.getAttribute('aria-hidden')).toBe('false')
    expect(navigation).toHaveStyle({
      opacity: 1,
      visibility: 'visible',
    })
  })
})
