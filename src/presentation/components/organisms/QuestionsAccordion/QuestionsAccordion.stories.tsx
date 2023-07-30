import type { Meta, StoryObj } from '@storybook/react'

import { grid } from '@/presentation/styles/tokens/grid'

import { accordionsMock } from './mock'

import { QuestionsAccordion } from '.'

const meta: Meta<typeof QuestionsAccordion> = {
  title: 'Organisms/QuestionsAccordion',
  component: QuestionsAccordion,
  args: {
    accordions: accordionsMock,
  },
}

export default meta
type Story = StoryObj<typeof QuestionsAccordion>

const template: Story = {
  render: (args) => (
    <div style={{ maxWidth: grid.container }}>
      <QuestionsAccordion {...args} />
    </div>
  ),
}

export const Default: Story = {
  ...template,
}
