import type { Meta, StoryObj } from '@storybook/react';
import AddCommentForm from './AddCommentForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  argTypes: {},
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onSendComment: () => {},
  },
};

Primary.decorators = [
  (Story) => (
    <StoreDecorator initialState={{}}>
      <Story />
    </StoreDecorator>
  ),
];

export const WithText: Story = {
  args: {
    onSendComment: () => {},
  },
};

WithText.decorators = [
  (Story) => (
    <StoreDecorator
      initialState={{
        addCommentForm: {
          text: 'text',
        },
      }}
    >
      <Story />
    </StoreDecorator>
  ),
];

export const Error: Story = {
  args: {
    onSendComment: () => {},
  },
};

Error.decorators = [
  (Story) => (
    <StoreDecorator
      initialState={{
        addCommentForm: {
          error: 'Error',
        },
      }}
    >
      <Story />
    </StoreDecorator>
  ),
];
