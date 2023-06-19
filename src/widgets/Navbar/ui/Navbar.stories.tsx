import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Navbar } from './Navbar';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

Light.decorators = [
  (Story) => (
    <StoreDecorator initialState={{}}>
      <Story />
    </StoreDecorator>
  ),
];

export const LoggedIn: Story = {
  args: {},
};

LoggedIn.decorators = [
  (Story) => (
    <StoreDecorator
      initialState={{
        user: {
          authData: {
            username: 'test',
            id: '1',
          },
        },
      }}
    >
      <Story />
    </StoreDecorator>
  ),
];

export const Dark: Story = {
  args: {},
};

Dark.decorators = [
  (Story) => (
    <ThemeDecorator theme={Theme.DARK}>
      <Story />
    </ThemeDecorator>
  ),
  (Story) => (
    <StoreDecorator initialState={{}}>
      <Story />
    </StoreDecorator>
  ),
];
