import { render, screen } from '@/__tests__/helpers'

import { subscriptionMock } from './mocks'

import {
  SubscriptionFormContext,
  subscriptionFormContextDefaultValues,
} from '@/presentation/hooks'

import { SubscriptionSection } from '.'

const { getByRole, getByText, getByTestId } = screen

const mock = subscriptionMock

const renderWithStepIndexMock = (currentStepIndex: number) => {
  const { container, rerender } = render(
    <SubscriptionFormContext.Provider
      value={{
        ...subscriptionFormContextDefaultValues,
        currentStepIndex,
      }}
    >
      <SubscriptionSection {...mock} />
    </SubscriptionFormContext.Provider>,
  )

  return {
    container,
    rerender,
  }
}

describe('<SubscriptionSection />', () => {
  it('should contain correct section id', () => {
    const { container } = renderWithStepIndexMock(0)

    const wrapper = container.firstChild

    expect(wrapper).toHaveAttribute('id', mock.id)
  })

  it('should render heading', () => {
    renderWithStepIndexMock(0)

    const heading = getByRole('heading', {
      name: mock.title,
    })

    expect(heading).toBeInTheDocument()
  })

  it('should render correct section description', () => {
    const { rerender } = renderWithStepIndexMock(0)

    const descriptionInitialStep = getByText(
      mock.initialStepDescription,
    )

    expect(descriptionInitialStep).toBeInTheDocument()

    rerender(
      <SubscriptionFormContext.Provider
        value={{
          ...subscriptionFormContextDefaultValues,
          currentStepIndex: 1,
        }}
      >
        <SubscriptionSection {...mock} />
      </SubscriptionFormContext.Provider>,
    )

    const descriptionFormSteps = getByText(mock.formStepsDescription)

    expect(descriptionFormSteps).toBeInTheDocument()
  })

  it('should render navigation steps', () => {
    renderWithStepIndexMock(1)

    mock.formStepNavLinks.forEach((formStepNavLink) => {
      const stepTitle = getByText(formStepNavLink.stepTitle)
      const stepNumber = getByText(formStepNavLink.stepNumber)

      expect(stepTitle).toBeInTheDocument()
      expect(stepNumber).toBeInTheDocument()
    })
  })

  it('should render current step with active', async () => {
    renderWithStepIndexMock(3)

    const stepOne = getByText(mock.formStepNavLinks[0].stepTitle)
    const stepTwo = getByText(mock.formStepNavLinks[1].stepTitle)
    const stepThree = getByText(mock.formStepNavLinks[2].stepTitle)
    const stepFour = getByText(mock.formStepNavLinks[3].stepTitle)

    expect(stepOne).toHaveAttribute('aria-current', 'false')
    expect(stepTwo).toHaveAttribute('aria-current', 'false')
    expect(stepThree).toHaveAttribute('aria-current', 'true')
    expect(stepFour).toHaveAttribute('aria-current', 'false')
  })

  it('should render current and previous steps with active', () => {
    renderWithStepIndexMock(3)

    const stepOne = getByTestId('step-1-active')
    const stepTwo = getByTestId('step-2-active')
    const stepThree = getByTestId('step-3-active')
    const stepFour = getByTestId('step-4-disabled')

    expect(stepOne).toBeInTheDocument()
    expect(stepTwo).toBeInTheDocument()
    expect(stepThree).toBeInTheDocument()
    expect(stepFour).toBeInTheDocument()
  })

  it('should render initial step', () => {
    renderWithStepIndexMock(0)

    const initialStep = getByTestId('mock-subscription-initial-step')

    expect(initialStep).toBeInTheDocument()
  })
})
