import { render, screen } from '@/__tests__/helpers'

import { Button } from '.'

const { getByRole, getByText } = screen

describe('<Button />', () => {
  it('should render primary variant by default', () => {
    render(<Button>Children</Button>)

    const button = getByRole('button')
    const text = getByText('Children')

    expect(text).toBeInTheDocument()
    expect(button).toHaveStyleRule(
      'background',
      'linear-gradient(225deg,#0048FE 0%,#851D86 100%)',
      {
        modifier: '::before',
      },
    )
  })

  it('should render secondary variant', () => {
    render(<Button variant="secondary">Children</Button>)

    const button = getByRole('button')
    const text = getByText('Children')

    expect(text).toBeInTheDocument()
    expect(button).toHaveStyle({
      background: 'none',
      'border-right': '2px solid #0048FE',
      'border-left': '2px solid #851D86',
      'background-image':
        'linear-gradient(to right, #851D86, #0048FE),linear-gradient(to right, #851D86, #0048FE)',
    })
  })

  it('should render disabled', () => {
    render(<Button disabled>Children</Button>)

    const button = getByRole('button')
    const text = getByText('Children')

    expect(text).toBeInTheDocument()

    expect(button).toHaveStyle({
      opacity: 0.7,
      cursor: 'not-allowed',
    })
  })

  it('should match snapshot', () => {
    const { container } = render(<Button>Children</Button>)

    expect(container).toMatchSnapshot()
  })
})
