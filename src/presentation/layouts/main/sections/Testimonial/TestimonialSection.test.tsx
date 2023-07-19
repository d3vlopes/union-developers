import { render, screen } from '@/__tests__/helpers'

import { mainLayoutMock } from '@/presentation/layouts/main/mocks/data'

import './mocks'

import { TestimonialSection } from '.'

const { getByRole, getByText, getByTestId } = screen

const mock = mainLayoutMock.testimonialSection

describe('<TestimonialSection />', () => {
  it('should contain correct section id', () => {
    const { container } = render(<TestimonialSection {...mock} />)

    const wrapper = container.firstChild

    expect(wrapper).toHaveAttribute('id', mock.id)
  })

  it('should render heading', () => {
    render(<TestimonialSection {...mock} />)

    const heading = getByRole('heading', { name: 'Depoimentos' })

    expect(heading).toBeInTheDocument()
  })

  it('should render description', () => {
    render(<TestimonialSection {...mock} />)

    const description = getByText(mock.description)

    expect(description).toBeInTheDocument()
  })

  it('should render TestimonialSlider', () => {
    render(<TestimonialSection {...mock} />)

    const slider = getByTestId('mock-testimonial-slider')

    expect(slider).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<TestimonialSection {...mock} />)

    expect(container).toMatchSnapshot()
  })
})
