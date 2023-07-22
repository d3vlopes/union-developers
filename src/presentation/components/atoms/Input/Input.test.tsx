import { render, screen } from '@/__tests__/helpers'

import { Input } from '.'

const { getByRole, getByText } = screen

describe('<Input />', () => {
  it('should render input', () => {
    render(<Input />)

    const input = getByRole('textbox')

    expect(input).toBeInTheDocument()
  })

  it('should render error', () => {
    render(<Input error="Error loren ipsum" />)

    const errorMessage = getByText('Error loren ipsum')

    expect(errorMessage).toBeInTheDocument()
  })
})
