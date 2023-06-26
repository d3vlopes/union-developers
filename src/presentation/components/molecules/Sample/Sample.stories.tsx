import type { Meta, StoryObj } from '@storybook/react'

import { Sample } from '.'

const meta: Meta<typeof Sample> = {
  title: 'Molecules/Sample',
  component: Sample,
  args: {
    title: 'Sample',
  },
}

export default meta
type Story = StoryObj<typeof Sample>

const template: Story = {
  render: (args) => <Sample {...args} />,
}

export const Default: Story = {
  ...template,
}
