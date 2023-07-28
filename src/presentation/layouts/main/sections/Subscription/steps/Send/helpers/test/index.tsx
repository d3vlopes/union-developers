import { render } from '@/__tests__/helpers'

import {
  SubscriptionFormContext,
  subscriptionFormContextDefaultValues,
} from '@/presentation/hooks'

import { SendStep } from '../..'

export const renderSubscriptionMessage = (
  subscriptionMessage: 'error' | 'success',
) => {
  render(
    <SubscriptionFormContext.Provider
      value={{
        ...subscriptionFormContextDefaultValues,
        isSubscriptionSuccess:
          subscriptionMessage === 'error' ? false : true,
        formData: {
          fullName: 'John Doe',
          email: 'johndoe@email.com',
        },
      }}
    >
      <SendStep />
    </SubscriptionFormContext.Provider>,
  )
}
