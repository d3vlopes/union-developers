import { render, screen } from '@/__tests__/helpers'

import { Checkbox } from '.'

const { getByRole, getByText } = screen

describe('<Checkbox />', () => {
  it('should render checkbox', () => {
    render(<Checkbox />)

    const checkbox = getByRole('checkbox')

    expect(checkbox).toBeInTheDocument()
  })

  it('should render error', () => {
    render(<Checkbox error="Error loren ipsum" />)

    const errorMessage = getByText('Error loren ipsum')

    expect(errorMessage).toBeInTheDocument()
  })
})
