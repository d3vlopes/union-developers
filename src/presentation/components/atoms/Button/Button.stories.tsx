import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '.'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  args: {
    children: 'Button',
    variant: 'primary',
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

const template: Story = {
  render: (args) => (
    <div style={{ maxWidth: '35.7rem' }}>
      <Button {...args} />
    </div>
  ),
}

export const Primary: Story = {
  ...template,
}

export const Secondary: Story = {
  ...template,
  args: {
    variant: 'secondary',
  },
}

export const Disabled: Story = {
  ...template,
  args: {
    disabled: true,
  },
}
