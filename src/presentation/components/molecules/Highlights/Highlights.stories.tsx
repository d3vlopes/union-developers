import type { Meta, StoryObj } from '@storybook/react'

import { highlightsMock } from './mock'

import { Highlights } from '.'

const meta: Meta<typeof Highlights> = {
  title: 'Molecules/Highlights',
  component: Highlights,
  parameters: {
    layout: 'centered',
  },
  args: {
    items: highlightsMock,
  },
}

export default meta
type Story = StoryObj<typeof Highlights>

const template: Story = {
  render: (args) => (
    <div style={{ width: '100%', maxWidth: '1140px' }}>
      <Highlights {...args} />
    </div>
  ),
}

export const Default: Story = {
  ...template,
}

export const Right: Story = {
  ...template,
  args: {
    items: highlightsMock.slice(0, 1),
  },
}

export const Left: Story = {
  ...template,
  args: {
    items: highlightsMock.slice(1, 2),
  },
}
