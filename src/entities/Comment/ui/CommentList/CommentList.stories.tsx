import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';

const meta = {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {},
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    comments: [
      {
        id: '1',
        text: 'Comment 1',
        user: {
          id: '1',
          username: 'John Doe',
          avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
        },
      },
      {
        id: '2',
        text: 'Comment 2',
        user: {
          id: '2',
          username: 'John Doe 2',
          avatar: 'https://avatars.githubusercontent.com/u/2?v=5',
        },
      },
      {
        id: '3',
        text: 'Comment 3',
        user: {
          id: '3',
          username: 'John Doe 3',
        },
      },
    ],
  },
};

// export const Loading: Story = {
//   args: {
//     isLoading: true,
//     comments: [],
//   },
// };
