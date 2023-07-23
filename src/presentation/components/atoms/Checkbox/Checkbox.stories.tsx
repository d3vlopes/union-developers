import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '.'

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
}

export default meta
type Story = StoryObj<typeof Checkbox>

const template: Story = {
  render: (args) => <Checkbox {...args} />,
}

export const Default: Story = {
  ...template,
}

export const WithError: Story = {
  ...template,
  args: {
    error: 'Campo obrigatório',
  },
}

export const WithChecked: Story = {
  ...template,
  args: {
    checked: true,
  },
}
