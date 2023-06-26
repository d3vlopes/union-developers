import { render, screen } from '@/__tests__/helpers'

import { Button } from '.'

const { getByRole } = screen

describe('<Button />', () => {
  it('should render by default', () => {
    render(<Button>Children</Button>)

    const button = getByRole('button', { name: 'Children' })

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      'background-color': '#811AC0',
    })
  })
})
