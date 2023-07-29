/* eslint-disable @typescript-eslint/no-empty-function */
import { vitest } from 'vitest'

import { render, screen } from '@/__tests__/helpers'

import { termsMock } from './components/Terms/mock'

import { expectContainLabelAndInput } from './helpers/test'

import { AboutYouStep } from '.'

const { getByRole } = screen

vitest.mock('react-modal', () => ({
  setAppElement: () => {},
}))

describe('<AboutYouStep />', () => {
  beforeEach(() => {
    render(<AboutYouStep terms={termsMock} />)
  })

  it('should render youMotivation form field', () => {
    const label =
      'Por que você gosta de programar? Qual sua maior motivação?'

    expectContainLabelAndInput(label)
  })

  it('should render timeManagement form field', () => {
    const label =
      'Como você faz para conseguir cumprir todos as suas responsabilidades do dia a dia?'

    expectContainLabelAndInput(label)
  })

  it('should render aboutFeedback form field', () => {
    const label = 'Quando você recebe um feedback, como é para você?'

    expectContainLabelAndInput(label)
  })

  it('should render howDidYouKnow form field', () => {
    const label = 'Como você ficou sabendo sobre o Union?'

    expectContainLabelAndInput(label)
  })

  it('should render becauseParticipate form field', () => {
    const label = 'Por que você quer fazer parte do Union?'

    expectContainLabelAndInput(label)
  })

  it('should render reasonForSelected form field', () => {
    const label =
      'Por que você deveria fazer parte do pequeno grupo que vai ter a oportunidade de participar do Union?'

    expectContainLabelAndInput(label)
  })

  it('should render checkbox terms', () => {
    const label = 'Li e concordo com os'

    const button = getByRole('button', { name: 'termos' })

    expectContainLabelAndInput(label, 'checkbox')

    expect(button).toBeInTheDocument()
  })

  it('should render back button', () => {
    const backButton = getByRole('button', { name: 'Voltar' })

    expect(backButton).toBeInTheDocument()
  })

  it('should render send button', () => {
    const nextButton = getByRole('button', { name: 'Enviar' })

    expect(nextButton).toBeInTheDocument()
  })
})
