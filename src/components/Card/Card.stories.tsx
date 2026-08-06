import type { Meta, StoryObj } from '@storybook/react';
import { ZButton } from '../ZButton/ZButton';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  args: {
    title: 'Card title',
    subtitle: 'A concise summary of the card content.',
    content: 'Use this card for featured content, highlights, or supporting information.',
    actions: (
      <>
        <ZButton variant="outlined">Learn more</ZButton>
        <ZButton>Get started</ZButton>
      </>
    ),
  },
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    content: { control: 'text' },
    actions: { control: false },
    media: { control: false },
    hoverAnimation: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const WithMedia: Story = {
  args: {
    media: <div style={{ padding: '1rem', minHeight: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: '#0f3b4f' }}>Illustration area</div>,
    title: 'Feature card',
    subtitle: 'Ideal for dashboards and marketing sections.',
    content: 'This example shows how a media area can support the card content while keeping the layout accessible.',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    title: 'Outlined card',
    subtitle: 'A lightweight alternative for secondary content.',
    content: 'Use the outlined variant when you want a gentler visual treatment.',
  },
};

export const HoverAnimation: Story = {
  args: {
    hoverAnimation: true,
    title: 'Animated card',
    subtitle: 'Hover animation enabled.',
    content: 'Use this when you want the card to lift and deepen its shadow on hover.',
  },
};
