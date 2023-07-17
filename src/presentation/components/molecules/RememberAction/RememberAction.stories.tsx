import type { Meta, StoryObj } from '@storybook/react'

import { grid } from '@/presentation/styles/tokens/grid'

import { rememberActionMock } from './mock'

import { RememberAction } from '.'

const meta: Meta<typeof RememberAction> = {
  title: 'Molecules/RememberAction',
  component: RememberAction,
  args: rememberActionMock,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
}

export default meta
type Story = StoryObj<typeof RememberAction>

const template: Story = {
  render: (args) => (
    <div style={{ maxWidth: grid.container, width: '100%' }}>
      <RememberAction {...args} />
    </div>
  ),
}

export const Default: Story = {
  ...template,
}
