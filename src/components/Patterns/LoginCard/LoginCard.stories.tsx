import AppleIcon from '@mui/icons-material/Apple';
import GitHubIcon from '@mui/icons-material/GitHub';
import type { Meta, StoryObj } from '@storybook/react';
import { LoginCard } from './LoginCard';

const meta: Meta<typeof LoginCard> = {
  title: 'Patterns/LoginCard',
  component: LoginCard,
  args: {
    socialIntegrations: undefined,
  },
  argTypes: {
    socialIntegrations: {
      control: false,
      description: 'The social sign-in options displayed below the form.',
    },
    socialLayout: {
      control: { type: 'radio' },
      options: ['stack', 'linear'],
    },
    showForgotPassword: { control: 'boolean' },
    showCreateAccount: { control: 'boolean' },
    onSubmit: { action: 'submitted' },
    onForgotPassword: { action: 'forgot password' },
    onCreateAccount: { action: 'create account' },
    onSocialIntegrationClick: { action: 'social integration clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof LoginCard>;

export const Default: Story = {};

export const CustomSocialIntegrations: Story = {
  args: {
    socialIntegrations: [
      { id: 'github', label: 'GitHub', icon: <GitHubIcon />, color: 'github' },
      { id: 'apple', label: 'Apple', icon: <AppleIcon />, color: 'apple' },
    ],
  },
};

export const Linear: Story = {
  args: {
    socialLayout: 'linear',
  },
};

export const WithoutSocialIntegrations: Story = {
  args: {
    socialIntegrations: [],
  },
};

export const WithoutAccountActions: Story = {
  args: {
    showForgotPassword: false,
    showCreateAccount: false,
  },
};
