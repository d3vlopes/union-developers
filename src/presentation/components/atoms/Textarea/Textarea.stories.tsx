import type { Meta, StoryObj } from '@storybook/react'

import { Textarea } from '.'

const meta: Meta<typeof Textarea> = {
  title: 'Atoms/Textarea',
  component: Textarea,
  args: {
    placeholder: 'Por que você quer fazer parte do Union?',
  },
}

export default meta
type Story = StoryObj<typeof Textarea>

const template: Story = {
  render: (args) => (
    <div style={{ width: '100%', maxWidth: '93rem' }}>
      <Textarea {...args} />
    </div>
  ),
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

export const WithValue: Story = {
  ...template,
  args: {
    value: 'Loren ipsum dolor sit amet, consectetur adipiscing elit',
  },
}
