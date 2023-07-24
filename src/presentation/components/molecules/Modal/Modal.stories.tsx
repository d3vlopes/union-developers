/* eslint-disable no-console */
import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from '.'

const meta: Meta<typeof Modal> = {
  title: 'Molecules/Modal',
  component: Modal,
  args: {
    children: (
      <div
        style={{
          padding: '5.6rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2>Termos de uso</h2>

        <p>Loren ipsum dolor</p>

        <div
          dangerouslySetInnerHTML={{ __html: '<p>Conteúdo</p>' }}
        />
      </div>
    ),
    isOpen: true,
    onRequestClose: () => {
      console.log('Clicked')
    },
  },
}

export default meta
type Story = StoryObj<typeof Modal>

const template: Story = {
  render: (args) => <Modal {...args} />,
}

export const Default: Story = {
  ...template,
}
