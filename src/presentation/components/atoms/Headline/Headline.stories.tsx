import type { Meta, StoryObj } from '@storybook/react'

import { Headline } from '.'

const meta: Meta<typeof Headline> = {
  title: 'Atoms/Headline',
  component: Headline,
  args: {
    children: 'Headline',
  },
}

export default meta
type Story = StoryObj<typeof Headline>

const template: Story = {
  render: (args) => <Headline {...args} />,
}

export const Default: Story = {
  ...template,
}
