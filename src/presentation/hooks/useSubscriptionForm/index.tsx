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
  handleNextStep: () => void
  handlePreviousStep: () => void
  formData: TFormData
  setFormData: Dispatch<SetStateAction<TFormData>>
}

export const subscriptionFormContextDefaultValues: SubscriptionFormContextValues<any> =
  {
    currentStepIndex: 0,
    formData: {},
    handleNextStep: () => null,
    handlePreviousStep: () => null,
    setFormData: () => null,
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
    formData,
    setFormData,
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
