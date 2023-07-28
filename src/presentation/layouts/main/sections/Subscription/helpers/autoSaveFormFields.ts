import { Dispatch, SetStateAction } from 'react'

export function autoSaveFormFields<TFormValues, TFormData>(
  formValues: TFormValues,
  formData: TFormData,
  errors: object,
  setFormData: Dispatch<SetStateAction<TFormData>>,
  delay = 5000,
) {
  const interval = setInterval(() => {
    const isFieldContainError = Object.keys(errors).length > 0

    if (!isFieldContainError) {
      setFormData({ ...formData, ...formValues })
    }
  }, delay)

  return interval
}
