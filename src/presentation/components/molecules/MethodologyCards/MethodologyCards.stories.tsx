import type { Meta, StoryObj } from '@storybook/react'

import { grid } from '@/presentation/styles/tokens/grid'

import { methodologyCardsMock } from './mock'

import { MethodologyCards } from '.'

const meta: Meta<typeof MethodologyCards> = {
  title: 'Molecules/MethodologyCards',
  component: MethodologyCards,
  args: {
    items: methodologyCardsMock,
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof MethodologyCards>

const template: Story = {
  render: (args) => (
    <div
      style={{
        width: '100%',
        maxWidth: grid.container,
      }}
    >
      <MethodologyCards {...args} />
    </div>
  ),
}

export const Default: Story = {
  ...template,
}

export const Single: Story = {
  ...template,
  args: {
    items: methodologyCardsMock.slice(0, 1),
  },
}
