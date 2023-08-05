import { screen } from '@/__tests__/helpers'

import { renderSubscriptionMessage } from './helpers/test'

const { getByRole, getByText } = screen

describe('<SendStep />', () => {
  describe('Error message', () => {
    beforeEach(() => {
      renderSubscriptionMessage('error')
    })

    it('should render correct icon', () => {
      const errorIcon = getByRole('img', {
        name: 'Ícone de negativo, representando que aconteceu algum erro durante o processamento da inscrição',
      })

      expect(errorIcon).toBeInTheDocument()
    })

    it('should render correct heading', () => {
      const errorHeading = getByRole('heading', {
        name: 'Não foi possível realizar a inscrição!',
      })

      expect(errorHeading).toBeInTheDocument()
    })

    it('should render correct message', () => {
      const errorMessage = getByText(
        'Aconteceu um erro durante o processamento da inscrição, entre em contato com nossa equipe.',
      )

      expect(errorMessage).toBeInTheDocument()
    })
  })

  describe('Success message', () => {
    beforeEach(() => {
      renderSubscriptionMessage('success')
    })

    it('should render correct icon', () => {
      const successIcon = getByRole('img', {
        name: 'Ícone de positivo, representando que a inscrição foi realizada com sucesso',
      })

      expect(successIcon).toBeInTheDocument()
    })

    it('should render correct heading', () => {
      const successHeading = getByRole('heading', {
        name: 'Inscrição realizada com sucesso!',
      })

      expect(successHeading).toBeInTheDocument()
    })

    it('should render correct message', () => {
      const successMessage = getByText(
        /obrigado por querer fazer parte do union, em breve nossa equipe vai entrar em contato pelo seu email , fique atento\./i,
      )

      expect(successMessage).toBeInTheDocument()
    })

    it('should render subscriber name', () => {
      const subscriberName = getByText('John Doe')

      expect(subscriberName).toBeInTheDocument()
    })

    it('should render subscriber email', () => {
      const subscriberEmail = getByText(/johndoe@email\.com/i)

      expect(subscriberEmail).toBeInTheDocument()
    })
  })
})
