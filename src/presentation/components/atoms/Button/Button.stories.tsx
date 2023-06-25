import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  args: {
    children: "Children",
    variant: "primary",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

const template: Story = {
  render: (args) => <Button {...args} />,
};

export const Primary: Story = {
  ...template,
};

export const Secondary: Story = {
  ...template,
  args: {
    variant: "secondary",
  },
};
