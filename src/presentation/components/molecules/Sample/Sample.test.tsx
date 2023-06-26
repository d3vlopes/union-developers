import { render, screen } from '@/__tests__/helpers'

import { Sample } from '.'

const { getByRole } = screen

describe('<Sample />', () => {
  it('should render by default', () => {
    render(<Sample title="Sample" />)

    expect(
      getByRole('heading', { name: 'Sample' }),
    ).toBeInTheDocument()
  })
})
