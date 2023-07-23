import { render, screen } from '@/__tests__/helpers'

import { Textarea } from '.'

const { getByRole, getByText } = screen

describe('<Textarea />', () => {
  it('should render textarea', () => {
    render(<Textarea />)

    const textarea = getByRole('textbox')

    expect(textarea).toBeInTheDocument()
  })

  it('should render error', () => {
    render(<Textarea error="Error loren ipsum" />)

    const errorMessage = getByText('Error loren ipsum')

    expect(errorMessage).toBeInTheDocument()
  })
})
