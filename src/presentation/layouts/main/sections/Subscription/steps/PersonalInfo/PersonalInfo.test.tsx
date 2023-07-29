import { render, screen } from '@/__tests__/helpers'

import { PersonalInfoStep } from '.'

const { getByRole, getByLabelText, getByText } = screen

describe('<PersonalInfoStep />', () => {
  beforeEach(() => {
    render(<PersonalInfoStep />)
  })

  it('should render fullName form field', () => {
    const label = getByLabelText('Nome completo')
    const input = getByRole('textbox', { name: 'Nome completo' })

    expect(label).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })

  it('should render age form field', () => {
    const label = getByLabelText('Idade')
    const input = getByRole('spinbutton', { name: 'Idade' })

    expect(label).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })

  it('should render email form field', () => {
    const label = getByLabelText('Email')
    const input = getByRole('textbox', { name: 'Email' })

    expect(label).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })

  it('should render github form field', () => {
    const label = getByLabelText('Github')
    const input = getByRole('textbox', { name: 'Github' })

    expect(label).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })

  it('should render linkedin form field', () => {
    const label = getByLabelText('Linkedin')
    const input = getByRole('textbox', { name: 'Linkedin' })

    expect(label).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })

  it('should render radio developmentSide form field', () => {
    const label = getByText('Onde você gosta mais de trabalhar?')

    const frontendRadio = getByRole('radio', {
      name: 'Frontend',
    })

    const backendRadio = getByRole('radio', {
      name: 'Backend',
    })

    expect(label).toBeInTheDocument()
    expect(frontendRadio).toBeInTheDocument()
    expect(backendRadio).toBeInTheDocument()
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
