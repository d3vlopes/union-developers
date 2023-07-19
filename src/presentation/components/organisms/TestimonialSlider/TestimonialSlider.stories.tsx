import styled from 'styled-components'
import type { Meta, StoryObj } from '@storybook/react'

import { grid } from '@/presentation/styles/tokens/grid'
import { media } from '@/presentation/styles/helpers'

import { testimonialsMock } from './mock'

import { TestimonialSlider } from '.'

const Wrapper = styled.div`
  width: 350px;
  max-width: ${grid.container};

  ${media.md`
    width: 50%;
  `}

  ${media.lg`
    width: 100%;
  `}
`

const meta: Meta<typeof TestimonialSlider> = {
  title: 'Organisms/TestimonialSlider',
  component: TestimonialSlider,
  args: {
    testimonials: testimonialsMock,
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof TestimonialSlider>

const template: Story = {
  render: (args) => (
    <Wrapper>
      <TestimonialSlider {...args} />
    </Wrapper>
  ),
}

export const Default: Story = {
  ...template,
}
