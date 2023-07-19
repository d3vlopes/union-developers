import { render, screen } from '@/__tests__/helpers'

import { mainLayoutMock } from './mocks'

import { MainLayout } from '.'

const { getByTestId, getByRole, getByText } = screen

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
    const heading = getByRole('heading', {
      name: mainLayoutMock.aboutSection.heading,
    })

    const description = getByText(
      mainLayoutMock.aboutSection.description,
    )

    expect(heading).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  it('should render about section', () => {
    const methodologySection = getByTestId('mock-methodology-section')

    expect(methodologySection).toBeInTheDocument()
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

  it('should render testimonial ', () => {
    const testimonialSection = getByTestId('mock-testimonial-section')

    expect(testimonialSection).toBeInTheDocument()
  })
})
