import { screen } from '@/__tests__/helpers'

const { getByLabelText, getByRole } = screen

export function expectContainLabelAndInput(
  labelValue: string,
  typeInput = 'textbox',
) {
  const label = getByLabelText(labelValue)

  const input = getByRole(typeInput, {
    name: labelValue,
  })

  expect(label).toBeInTheDocument()
  expect(input).toBeInTheDocument()
}
