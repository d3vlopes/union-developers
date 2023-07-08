import { render, screen } from '@/__tests__/helpers'

import { Headline } from '.'

const { getByRole, getByLabelText } = screen

describe('<Headline />', () => {
  it('should render heading', () => {
    render(<Headline>Headline</Headline>)

    const headline = getByRole('heading', { name: 'Headline' })

    expect(headline).toBeInTheDocument()
  })

  it('should render left line', () => {
    render(<Headline>Headline</Headline>)

    const leftLine = getByLabelText('Linha a esquerda do titulo')

    expect(leftLine).toBeInTheDocument()
  })

  it('should render right line', () => {
    render(<Headline>Headline</Headline>)

    const rightLine = getByLabelText('Linha a direita do titulo')

    expect(rightLine).toBeInTheDocument()
  })
})
