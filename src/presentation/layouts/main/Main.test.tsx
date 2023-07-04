import { render, screen } from '@/__tests__/helpers'

import { mainLayoutMock } from './mocks'

import { MainLayout } from '.'

const { getByTestId } = screen

describe('<MainLayout />', () => {
  it('should render Base layout', () => {
    render(<MainLayout {...mainLayoutMock} />)

    const baseLayout = getByTestId('mock-base-layout')

    expect(baseLayout).toBeInTheDocument()
  })
})
