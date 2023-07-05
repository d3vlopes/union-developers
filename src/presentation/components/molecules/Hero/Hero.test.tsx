import { render, screen } from '@/__tests__/helpers'

import { heroMockFactory } from './mock'

import { Hero } from '.'

const mock = heroMockFactory['default']

const { getByRole, getByText } = screen

describe('<Hero />', () => {
  it('should render heading', () => {
    render(<Hero {...mock} />)

    const title = getByRole('heading')

    expect(title).toBeInTheDocument()
  })

  it('should render description', () => {
    render(<Hero {...mock} />)

    const description = getByText(mock.description)

    expect(description).toBeInTheDocument()
  })

  it('should render button', () => {
    render(<Hero {...mock} />)

    const button = getByRole('button', { name: mock.buttonText })

    expect(button).toBeInTheDocument()
  })

  it('should render anchor under button with href for button target value', () => {
    render(<Hero {...mock} />)

    const anchor = getByRole('link', { name: mock.buttonText })

    expect(anchor).toHaveAttribute('href', mock.buttonTarget)
  })

  it('should render background image', () => {
    const { container } = render(<Hero {...mock} />)

    const wrapper = container.firstChild

    expect(wrapper).toHaveStyle({
      'background-image': `url(${mock.backgroundMobile})`,
    })
  })

  it('should render background desktop image on greater than large size', () => {
    const { container } = render(<Hero {...mock} />)

    const wrapper = container.firstChild

    expect(wrapper).toHaveStyleRule(
      'background-image',
      `url(${mock.backgroundDesktop})`,
      {
        media: '(min-width:768px)',
      },
    )
  })

  it('should match snapshot', () => {
    const { container } = render(<Hero {...mock} />)

    expect(container).toMatchSnapshot()
  })
})
