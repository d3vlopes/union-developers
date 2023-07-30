import type { Meta, StoryObj } from '@storybook/react'

import { grid } from '@/presentation/styles/tokens/grid'

import { accordionMock } from './mock'

import { Accordion } from '.'

const meta: Meta<typeof Accordion> = {
  title: 'Molecules/Accordion',
  component: Accordion,
  args: accordionMock,
}

export default meta
type Story = StoryObj<typeof Accordion>

const template: Story = {
  render: (args) => (
    <div
      style={{
        maxWidth: grid.container,
        display: 'flex',
        flexDirection: 'column',
        gap: '1.6rem',
      }}
    >
      <Accordion {...args} />
    </div>
  ),
}

export const Default: Story = {
  ...template,
}
