import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Primitives/Typography',
  component: Typography,
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'body1',
    tone: 'primary',
  },
  argTypes: {
    tone: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'muted', 'accent'],
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
    },
    weight: {
      control: { type: 'select' },
      options: ['regular', 'medium', 'semibold', 'bold'],
    },
    uppercase: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {};

export const Headings: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: '0.75rem' }}>
      <Typography {...args} component="h1" variant="h3" weight="bold">
        Section heading
      </Typography>
      <Typography {...args} component="h2" variant="h5" weight="semibold">
        Subheading
      </Typography>
      <Typography {...args} variant="body1" tone="secondary">
        Body copy that supports the heading hierarchy.
      </Typography>
    </div>
  ),
};

export const Emphasis: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: '0.75rem' }}>
      <Typography {...args} tone="accent" weight="bold">
        Accent copy
      </Typography>
      <Typography {...args} tone="muted" variant="body2">
        Muted supporting text
      </Typography>
      <Typography {...args} align="center" uppercase>
        Uppercase label
      </Typography>
    </div>
  ),
};
