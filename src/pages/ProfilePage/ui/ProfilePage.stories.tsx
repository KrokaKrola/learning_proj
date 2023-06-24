import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {},
  decorators: [
    (Story) => (
      <StoreDecorator initialState={{}}>
        <Story />
      </StoreDecorator>
    ),
  ],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};

Dark.decorators = [
  (Story) => (
    <ThemeDecorator theme={Theme.DARK}>
      <Story />
    </ThemeDecorator>
  ),
];
