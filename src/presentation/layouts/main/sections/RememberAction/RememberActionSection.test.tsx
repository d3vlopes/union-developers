import { render, screen } from '@/__tests__/helpers'

import './mocks'

import { mainLayoutMock } from '@/presentation/layouts/main/mocks/data'

import { RememberActionSection } from '.'

const { getByTestId } = screen

const mock = mainLayoutMock.rememberActionSection

describe('<RememberActionSection />', () => {
  it('should render RememberAction', () => {
    render(<RememberActionSection {...mock} />)

    const rememberAction = getByTestId('mock-remember-action')

    expect(rememberAction).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<RememberActionSection {...mock} />)

    expect(container).toMatchSnapshot()
  })
})
