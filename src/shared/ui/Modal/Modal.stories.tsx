import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children:
      'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ',
  },
};

// export const PrimaryDark: Story = {
//   args: {
//     isOpen: true,
//     children:
//       'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ',
//   },
// };
//
// PrimaryDark.decorators = [
//   (Story) => (
//     <ThemeDecorator theme={Theme.DARK}>
//       <Story />
//     </ThemeDecorator>
//   ),
// ];
