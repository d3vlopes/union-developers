import { render, screen } from '@/__tests__/helpers'

import { TechnicalInfoStep } from '.'

const { getByRole, getByLabelText, getByText } = screen

describe('<TechnicalInfoStep />', () => {
  beforeEach(() => {
    render(<TechnicalInfoStep />)
  })

  it('should render radio timeLearning form field', () => {
    const label = getByText('Quanto tempo você estuda programação?')

    const optionOne = getByRole('radio', {
      name: '1 ano',
    })

    const optionTwo = getByRole('radio', {
      name: '2 anos',
    })

    const optionThree = getByRole('radio', {
      name: '3 anos',
    })

    const optionFour = getByRole('radio', {
      name: 'Mais de 3 anos',
    })

    expect(label).toBeInTheDocument()
    expect(optionOne).toBeInTheDocument()
    expect(optionTwo).toBeInTheDocument()
    expect(optionThree).toBeInTheDocument()
    expect(optionFour).toBeInTheDocument()
  })

  it('should render linkRepoBestProject form field', () => {
    const label = getByLabelText(
      'Link do repositório do seu melhor projeto',
    )

    const textarea = getByRole('textbox', {
      name: 'Link do repositório do seu melhor projeto',
    })

    expect(label).toBeInTheDocument()
    expect(textarea).toBeInTheDocument()
  })

  it('should render aboutBestProject form field', () => {
    const label = getByLabelText(
      'Fale sobre como foi construir esse projeto? Quais foram os aprendizados e dificuldades que teve durante o desenvolvimento?',
    )

    const textarea = getByRole('textbox', {
      name: 'Fale sobre como foi construir esse projeto? Quais foram os aprendizados e dificuldades que teve durante o desenvolvimento?',
    })

    expect(label).toBeInTheDocument()
    expect(textarea).toBeInTheDocument()
  })

  it('should render back button', () => {
    const backButton = getByRole('button', { name: 'Voltar' })

    expect(backButton).toBeInTheDocument()
  })

  it('should render next button', () => {
    const nextButton = getByRole('button', { name: 'Próximo' })

    expect(nextButton).toBeInTheDocument()
  })
})
