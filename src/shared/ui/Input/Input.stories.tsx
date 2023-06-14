import type { Meta, StoryObj } from '@storybook/react';

import { Input } from 'shared/ui/Input/Input';

const meta = {
  title: 'shared/Input',
  component: Input,
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Placeholder',
    value: 'Some text',
  },
};
