import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '.'

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
}

export default meta
type Story = StoryObj<typeof Input>

const template: Story = {
  render: (args) => (
    <div style={{ width: '100%', maxWidth: '62.3rem' }}>
      <Input {...args} placeholder="Seu nome completo" />
    </div>
  ),
}

export const Default: Story = {
  ...template,
}

export const WithValue: Story = {
  ...template,
  args: {
    value: 'John Doe',
  },
}

export const WithError: Story = {
  ...template,
  args: {
    error: 'Campo obrigatório',
  },
}
