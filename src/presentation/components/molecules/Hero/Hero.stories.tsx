import type { Meta, StoryObj } from '@storybook/react'

import { heroMockFactory } from './mock'

import { Hero } from '.'

const meta: Meta<typeof Hero> = {
  title: 'Molecules/Hero',
  component: Hero,
  args: heroMockFactory['default'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Hero>

const template: Story = {
  render: (args) => <Hero {...args} />,
}

export const Default: Story = {
  ...template,
}

export const WithLongTitle: Story = {
  ...template,
  args: heroMockFactory['long-title'],
}

export const WithLongDescription: Story = {
  ...template,
  args: heroMockFactory['long-description'],
}
