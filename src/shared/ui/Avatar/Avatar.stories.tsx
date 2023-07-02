import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import AvatarImage from './image.png';

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: AvatarImage,
    size: 150,
    alt: 'Avatar',
  },
};

export const PrimarySmall: Story = {
  args: {
    src: AvatarImage,
    size: 50,
    alt: 'Avatar',
  },
};
