import PersonAddIcon from '@mui/icons-material/PersonAdd';
import type { Meta, StoryObj } from '@storybook/react';
import { ZButton } from '../../Primitives/ZButton/ZButton';
import { AvatarCard } from './AvatarCard';

const meta: Meta<typeof AvatarCard> = {
  title: 'Patterns/AvatarCard',
  component: AvatarCard,
  args: {
    name: 'Alex Morgan',
    subtitle: 'Product designer',
    description: 'Creates simple, accessible experiences for growing teams.',
    initials: 'AM',
    status: 'online',
    layout: 'horizontal',
    fullWidth: false,
    actions: <ZButton variant="outlined">View profile</ZButton>,
  },
  argTypes: {
    avatar: { control: false },
    actions: { control: false },
    layout: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
    fullWidth: { control: 'boolean' },
    status: {
      control: { type: 'select' },
      options: ['online', 'away', 'busy', 'offline'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof AvatarCard>;

export const Default: Story = {};

export const Vertical: Story = {
  args: {
    layout: 'vertical',
    actions: <ZButton startIcon={<PersonAddIcon />}>Connect</ZButton>,
  },
};

export const WithoutStatus: Story = {
  args: {
    status: undefined,
  },
};

export const WithImage: Story = {
  args: {
    avatarSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop',
    avatarAlt: 'Portrait of Alex Morgan',
    initials: undefined,
  },
};
