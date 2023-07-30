import { render, screen } from '@/__tests__/helpers'

import { mainLayoutMock } from './mocks'

import { MainLayout } from '.'

const { getByTestId } = screen

describe('<MainLayout />', () => {
  beforeEach(() => {
    render(<MainLayout {...mainLayoutMock} />)
  })

  it('should render Base layout', () => {
    const baseLayout = getByTestId('mock-base-layout')

    expect(baseLayout).toBeInTheDocument()
  })

  it('should render Hero', () => {
    const hero = getByTestId('mock-hero')

    expect(hero).toBeInTheDocument()
  })

  it('should render about section', () => {
    const aboutSection = getByTestId('mock-about-section')

    expect(aboutSection).toBeInTheDocument()
  })

  it('should render pillars section', () => {
    const pillarsSection = getByTestId('mock-pillars-section')

    expect(pillarsSection).toBeInTheDocument()
  })

  it('should render highlight section', () => {
    const highlightSection = getByTestId('mock-highlight-section')

    expect(highlightSection).toBeInTheDocument()
  })

  it('should render steps section', () => {
    const stepsSection = getByTestId('mock-steps-section')

    expect(stepsSection).toBeInTheDocument()
  })

  it('should render remember action section', () => {
    const rememberActionSection = getByTestId(
      'mock-remember-action-section',
    )

    expect(rememberActionSection).toBeInTheDocument()
  })

  it('should render testimonial section', () => {
    const testimonialSection = getByTestId('mock-testimonial-section')

    expect(testimonialSection).toBeInTheDocument()
  })

  it('should render subscription section', () => {
    const subscriptionSection = getByTestId(
      'mock-subscription-section',
    )

    expect(subscriptionSection).toBeInTheDocument()
  })

  it('should render faq section', () => {
    const faqSection = getByTestId('mock-faq-section')

    expect(faqSection).toBeInTheDocument()
  })
})
