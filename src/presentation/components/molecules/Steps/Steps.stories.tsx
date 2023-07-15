import type { Meta, StoryObj } from '@storybook/react'

import { grid } from '@/presentation/styles/tokens/grid'

import { stepsMock } from './mock'

import { Steps } from '.'

const meta: Meta<typeof Steps> = {
  title: 'Molecules/Steps',
  component: Steps,
  args: {
    steps: stepsMock,
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Steps>

const template: Story = {
  render: (args) => (
    <div style={{ maxWidth: grid.container }}>
      <Steps {...args} />
    </div>
  ),
}

export const Default: Story = {
  ...template,
}
