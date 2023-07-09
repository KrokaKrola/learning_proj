import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    width: '100%',
    height: 200,
    withAnimation: false,
  },
};

export const PrimaryDark: Story = {
  args: {
    width: '100%',
    height: 200,
    withAnimation: false,
  },
};

PrimaryDark.decorators = [
  (Story) => (
    <ThemeDecorator theme={Theme.DARK}>
      <Story />
    </ThemeDecorator>
  ),
];

export const Circle: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
    withAnimation: false,
  },
};

export const CircleDark: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
    withAnimation: false,
  },
};

CircleDark.decorators = [
  (Story) => (
    <ThemeDecorator theme={Theme.DARK}>
      <Story />
    </ThemeDecorator>
  ),
];
