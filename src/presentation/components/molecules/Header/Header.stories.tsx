import type { Meta, StoryObj } from '@storybook/react'

import { headerMock } from './mock'

import { Header } from '.'

const meta: Meta<typeof Header> = {
  title: 'Molecules/Header',
  component: Header,
  args: {
    ...headerMock,
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Header>

const template: Story = {
  render: (args) => (
    <div style={{ height: '400vh' }}>
      <Header {...args} />
      <main style={{ marginTop: '160px' }}>
        <section id="about" style={{ height: '500px' }}>
          Sobre
        </section>
        <section id="highlights" style={{ height: '500px' }}>
          Benefícios
        </section>
        <section id="works" style={{ height: '500px' }}>
          Como funciona
        </section>
        <section id="questions" style={{ height: '500px' }}>
          Dúvidas
        </section>
      </main>
    </div>
  ),
}

export const Default: Story = {
  ...template,
}
