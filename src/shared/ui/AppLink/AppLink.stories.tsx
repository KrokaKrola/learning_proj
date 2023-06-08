import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {},
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    theme: AppLinkTheme.PRIMARY,
    to: '/',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    theme: AppLinkTheme.SECONDARY,
    to: '/',
  },
};

export const PrimaryDark: Story = {
  args: {
    children: 'Primary',
    theme: AppLinkTheme.PRIMARY,
    to: '/',
  },
};

PrimaryDark.decorators = [
  (Story) => (
    <ThemeDecorator theme={Theme.DARK}>
      <Story />
    </ThemeDecorator>
  ),
];

export const SecondaryDark: Story = {
  args: {
    children: 'Secondary',
    theme: AppLinkTheme.SECONDARY,
    to: '/',
  },
};

SecondaryDark.decorators = [
  (Story) => (
    <ThemeDecorator theme={Theme.DARK}>
      <Story />
    </ThemeDecorator>
  ),
];
