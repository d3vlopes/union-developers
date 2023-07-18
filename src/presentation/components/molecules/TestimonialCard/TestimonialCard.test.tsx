import { render, screen } from '@/__tests__/helpers'

import { testimonialCardMock } from './mock'

import { TestimonialCard } from '.'

const { getByRole, getByText } = screen

const mock = testimonialCardMock

describe('<TestimonialCard />', () => {
  beforeEach(() => {
    render(<TestimonialCard {...mock} />)
  })

  it('should render image', () => {
    const image = getByRole('img', {
      name: `Foto do membro ${mock.name}`,
    })

    expect(image).toHaveAttribute('src', mock.imgUrl)
  })

  it('should render name', () => {
    const name = getByRole('heading', { name: mock.name })

    expect(name).toBeInTheDocument()
  })

  it('should render testimonial text', () => {
    const testimonialText = getByText(mock.testimonialText)

    expect(testimonialText).toBeInTheDocument()
  })

  it('should render social links', () => {
    mock.socialLinks.forEach((socialLink) => {
      const socialAnchor = getByText(socialLink.name)
      const socialIcon = getByRole('img', { name: socialLink.name })

      expect(socialAnchor).toHaveAttribute('href', socialLink.url)
      expect(socialIcon).toHaveAttribute('src', socialLink.iconUrl)
    })
  })
})
