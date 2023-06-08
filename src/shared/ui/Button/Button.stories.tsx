import type { Meta, StoryObj } from '@storybook/react';

import { Button, ThemeButton } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary',
  },
};

export const Clear: Story = {
  args: {
    children: 'Clear',
    theme: ThemeButton.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    theme: ThemeButton.OUTLINE,
  },
};
