import type { Meta, StoryObj } from '@storybook/react';
import { Select } from 'shared/ui/Select/Select';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Select',
  component: Select,
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Label',
    options: [
      { content: 'Option 1', value: 'option1' },
      { content: 'Option 2', value: 'option2' },
      { content: 'Option 3', value: 'option3' },
      { content: 'Option 4', value: 'option4' },
    ],
  },
};

export const PrimaryDark: Story = {
  args: {
    label: 'Label',
    options: [
      { content: 'Option 1', value: 'option1' },
      { content: 'Option 2', value: 'option2' },
      { content: 'Option 3', value: 'option3' },
      { content: 'Option 4', value: 'option4' },
    ],
  },
};

PrimaryDark.decorators = [
  (Story) => (
    <ThemeDecorator theme={Theme.DARK}>
      <Story />
    </ThemeDecorator>
  ),
];
