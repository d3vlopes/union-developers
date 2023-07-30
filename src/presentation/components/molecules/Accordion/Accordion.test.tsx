import {
  render,
  screen,
  userEvent,
  waitFor,
} from '@/__tests__/helpers'

import { accordionMock } from './mock'

import { lessIcon, plusIcon } from './assets'

import { Accordion } from '.'

const { getByRole, queryByTestId, getByTestId } = screen

const mock = accordionMock

describe('<Accordion />', () => {
  beforeEach(() => {
    render(<Accordion {...mock} />)
  })

  it('should render title', () => {
    const heading = getByRole('heading', { name: mock.title })

    expect(heading).toBeInTheDocument()
  })

  it('should render content', () => {
    const content = getByTestId('content')

    expect(content).toBeInTheDocument()
  })

  it('should render open/close button', () => {
    const button = getByRole('button')

    expect(button)
  })

  it('should render open/close icon', () => {
    const icon = getByRole('img')

    expect(icon).toBeInTheDocument()
  })

  it('should render close by default', () => {
    const icon = getByRole('img', { name: 'Abrir' })
    const content = queryByTestId('content')

    expect(icon).toHaveAttribute('src', plusIcon)

    expect(content).toHaveStyle({
      display: 'none',
    })
  })

  it('should change close/open state on click button', async () => {
    const icon = getByRole('img')
    const button = getByRole('button')

    userEvent.click(button)

    await waitFor(() => {
      const content = getByTestId('content')

      expect(icon).toHaveAttribute('src', lessIcon)
      expect(icon).toHaveAttribute('alt', 'Fechar')

      expect(content).toHaveStyle({
        display: 'block',
      })
    })
  })
})
