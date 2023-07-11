import { render, screen } from '@/__tests__/helpers'

import { mainLayoutMock } from './mocks'

import { MainLayout } from '.'

const { getByTestId, getByRole, getByText } = screen

describe('<MainLayout />', () => {
  it('should render Base layout', () => {
    render(<MainLayout {...mainLayoutMock} />)

    const baseLayout = getByTestId('mock-base-layout')

    expect(baseLayout).toBeInTheDocument()
  })

  it('should render Hero', () => {
    render(<MainLayout {...mainLayoutMock} />)

    const hero = getByTestId('mock-hero')

    expect(hero).toBeInTheDocument()
  })

  it('should render about section', () => {
    render(<MainLayout {...mainLayoutMock} />)

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
    render(<MainLayout {...mainLayoutMock} />)

    const methodologySection = getByTestId('mock-methodology-section')

    expect(methodologySection).toBeInTheDocument()
  })

  it('should render highlight section', () => {
    render(<MainLayout {...mainLayoutMock} />)

    const highlightSection = getByTestId('mock-highlight-section')

    expect(highlightSection).toBeInTheDocument()
  })
})
