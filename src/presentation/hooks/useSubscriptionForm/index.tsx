/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

interface SubscriptionFormContextValues<TFormData> {
  currentStepIndex: number
  isSubscriptionSuccess: boolean
  handleNextStep: () => void
  handlePreviousStep: () => void
  formData: TFormData
  setFormData: Dispatch<SetStateAction<TFormData>>
  setIsSubscriptionSuccess: Dispatch<SetStateAction<boolean>>
}

export const subscriptionFormContextDefaultValues: SubscriptionFormContextValues<any> =
  {
    currentStepIndex: 0,
    isSubscriptionSuccess: false,
    formData: {},
    handleNextStep: () => null,
    handlePreviousStep: () => null,
    setFormData: () => null,
    setIsSubscriptionSuccess: () => null,
  }

export const SubscriptionFormContext = createContext<
  SubscriptionFormContextValues<any>
>(subscriptionFormContextDefaultValues)

export type SubscriptionFormContextProviderProps = {
  children: ReactNode
}

export function SubscriptionFormContextProvider({
  children,
}: SubscriptionFormContextProviderProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(
    subscriptionFormContextDefaultValues.currentStepIndex,
  )

  const [isSubscriptionSuccess, setIsSubscriptionSuccess] = useState(
    subscriptionFormContextDefaultValues.isSubscriptionSuccess,
  )

  const [formData, setFormData] = useState(
    subscriptionFormContextDefaultValues.formData,
  )

  function handleNextStep() {
    setCurrentStepIndex((prevState) => prevState + 1)
  }

  function handlePreviousStep() {
    setCurrentStepIndex((prevState) => prevState - 1)
  }

  const values = {
    currentStepIndex,
    isSubscriptionSuccess,
    formData,
    setFormData,
    setIsSubscriptionSuccess,
    handleNextStep,
    handlePreviousStep,
  }

  return (
    <SubscriptionFormContext.Provider value={values}>
      {children}
    </SubscriptionFormContext.Provider>
  )
}

export function useSubscriptionForm<TFormData = any>() {
  const context = useContext<
    SubscriptionFormContextValues<TFormData>
  >(SubscriptionFormContext)

  if (context === undefined) {
    throw new Error(
      'useSubscriptionForm must be used within a SubscriptionFormProvider',
    )
  }

  return context
}
