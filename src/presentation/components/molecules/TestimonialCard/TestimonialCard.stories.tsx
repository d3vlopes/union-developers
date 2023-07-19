import type { Meta, StoryObj } from '@storybook/react'

import { testimonialCardMock } from './mock'

import { TestimonialCard } from '.'

const meta: Meta<typeof TestimonialCard> = {
  title: 'Molecules/TestimonialCard',
  component: TestimonialCard,
  args: testimonialCardMock,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof TestimonialCard>

const template: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TestimonialCard {...args} />
    </div>
  ),
}

export const Default: Story = {
  ...template,
}
