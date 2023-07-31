import { render, screen } from '@/__tests__/helpers'

import { footerMock } from './mock'

import { Footer } from '.'

const { getByRole, getByText, getByLabelText } = screen

const mock = footerMock

describe('<Footer />', () => {
  beforeEach(() => {
    render(<Footer {...mock} />)
  })

  it('should render logo', () => {
    const logo = getByRole('img', { name: mock.logo.alt })

    expect(logo).toHaveAttribute('src', mock.logo.imgUrl)
  })

  it('should render slogan', () => {
    const slogan = getByText(mock.companySlogan)

    expect(slogan).toBeInTheDocument()
  })

  it('should render navigation menu links', () => {
    const nav = getByRole('navigation')

    mock.navigationMenuLinks.forEach((navigationMenuLink) => {
      const title = getByRole('heading', {
        name: navigationMenuLink.title,
      })

      expect(title)

      navigationMenuLink.links.forEach((link) => {
        const anchor = getByRole('link', { name: link.label })

        expect(anchor).toHaveAttribute('href', link.target)
      })
    })

    expect(nav).toBeInTheDocument()
  })

  it('should render social links', () => {
    mock.socialLinks.forEach((socialLink) => {
      const isEmail = socialLink.label === 'Email'

      const icon = getByRole('img', { name: socialLink.icon.alt })
      const anchor = getByLabelText(socialLink.label)

      expect(icon).toBeInTheDocument()

      if (isEmail) {
        expect(anchor).toHaveAttribute(
          'href',
          `mailto:${socialLink.target}`,
        )
      } else {
        expect(anchor).toHaveAttribute('href', socialLink.target)
      }
    })
  })

  it('should render copyright with current year', () => {
    const currentYear = new Date().getFullYear()

    const copyright = getByText(
      `© ${mock.companyName} - ${currentYear}`,
    )

    expect(copyright).toBeInTheDocument()
  })
})
