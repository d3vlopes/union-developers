import { render, screen } from '@/__tests__/helpers'

import { mainLayoutMock } from '@/presentation/layouts/main/mocks/data'

import './mocks'

import { FaqSection } from '.'

const { getByRole, getByTestId } = screen

const mock = mainLayoutMock.faqSection

describe('<FaqSection />', () => {
  beforeEach(() => {
    render(<FaqSection {...mock} />)
  })

  it('should contain correct section id', () => {
    const { container } = render(<FaqSection {...mock} />)

    const wrapper = container.firstChild

    expect(wrapper).toHaveAttribute('id', mock.id)
  })

  it('should render heading', () => {
    const heading = getByRole('heading', { name: mock.heading })

    expect(heading).toBeInTheDocument()
  })

  it('should render QuestionsAccordion', () => {
    const questionsAccordion = getByTestId('mock-questions-accordion')

    expect(questionsAccordion).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<FaqSection {...mock} />)

    expect(container).toMatchSnapshot()
  })
})
