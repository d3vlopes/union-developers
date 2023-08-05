interface SubscriptionResponseError {
  message: string
}

export interface SubscriptionResponse {
  message: string
  payload?: {
    data?: {
      createSubscriptionForm: {
        id: string
      }
    }
    error?: SubscriptionResponseError[]
  }
}
