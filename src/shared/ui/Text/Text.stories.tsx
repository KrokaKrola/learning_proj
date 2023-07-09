import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextSize, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Text',
  component: Text,
  argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Title',
    text: 'Text',
  },
};

export const Error: Story = {
  args: {
    title: 'Error',
    text: 'Error',
    theme: TextTheme.ERROR,
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'Title',
  },
};

export const OnlyText: Story = {
  args: {
    text: 'Text',
  },
};

export const PrimaryDark: Story = {
  args: {
    title: 'Title',
    text: 'Text',
  },
};

PrimaryDark.decorators = [
  (Story) => (
    <ThemeDecorator theme={Theme.DARK}>
      <Story />
    </ThemeDecorator>
  ),
];

export const OnlyTitleDark: Story = {
  args: {
    title: 'Title',
  },
};

OnlyTitleDark.decorators = [
  (Story) => (
    <ThemeDecorator theme={Theme.DARK}>
      <Story />
    </ThemeDecorator>
  ),
];

export const OnlyTextDark: Story = {
  args: {
    text: 'Text',
  },
};

OnlyTextDark.decorators = [
  (Story) => (
    <ThemeDecorator theme={Theme.DARK}>
      <Story />
    </ThemeDecorator>
  ),
];

export const SizeM: Story = {
  args: {
    title: 'Title',
    text: 'Text',
    size: TextSize.M,
  },
};

export const SizeL: Story = {
  args: {
    title: 'Title',
    text: 'Text',
    size: TextSize.L,
  },
};
