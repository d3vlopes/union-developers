import { vitest } from 'vitest'

import { ReactModal } from '@/libs/modals'

import { render, screen } from '@/__tests__/helpers'

import { termsMock } from './mock'

import { Terms } from '.'

const { getByRole, getByTestId } = screen

const mock = termsMock

vitest.spyOn(ReactModal, 'setAppElement')

describe('<Terms />', () => {
  beforeEach(() => {
    render(<Terms {...mock} />)
  })

  it('should render heading', () => {
    const heading = getByRole('heading', {
      name: mock.title,
    })

    expect(heading).toBeInTheDocument()
  })

  it('should render subtitle', () => {
    const subtitle = getByRole('heading', { name: mock.subtitle })

    expect(subtitle).toBeInTheDocument()
  })

  it('should render content', () => {
    const content = getByTestId('content')

    expect(content).toBeInTheDocument()
  })
})
