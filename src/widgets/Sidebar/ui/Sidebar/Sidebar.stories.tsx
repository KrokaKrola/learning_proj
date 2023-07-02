import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {},
  decorators: [],
} satisfies Meta<typeof Sidebar>;

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

export const Dark: Story = {
  args: {},
};

Dark.decorators = [
  (Story) => (
    <ThemeDecorator theme={Theme.DARK}>
      <StoreDecorator initialState={{}}>
        <Story />
      </StoreDecorator>
    </ThemeDecorator>
  ),
];

export const Auth: Story = {
  args: {},
};

Auth.decorators = [
  (Story) => (
    <StoreDecorator
      initialState={{
        user: {
          authData: {
            username: 'admin',
            id: '1',
          },
        },
      }}
    >
      <Story />
    </StoreDecorator>
  ),
];
