import { Add, ArrowForward } from '@mui/icons-material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    variant: 'contained',
    color: 'primary',
  },
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: { type: 'select' },
      options: ['contained', 'outlined', 'text'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'error', 'info', 'secondary', 'inherit'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    startIcon: {
      control: false,
      description: 'Element placed before the children.',
      table: { type: { summary: 'ReactNode' } },
    },
    endIcon: {
      control: false,
      description: 'Element placed after the children.',
      table: { type: { summary: 'ReactNode' } },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export const Default: Story = {
  args: {
    // ...existing args...
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Outlined',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Text',
  },
};

export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'Primary',
  },
};

export const Success: Story = {
  args: {
    color: 'success',
    children: 'Success',
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
    children: 'Warning',
  },
};

export const Error: Story = {
  args: {
    color: 'error',
    children: 'Error',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

export const onClick: Story = {
  args: {
    children: 'Click Me',
    onClick: () => alert('Button clicked!'),
  },
};

export const StartEndIcon: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16 }}>
      <Button {...args} startIcon={<Add />}>
        Start Icon
      </Button>
      <Button {...args} endIcon={<ArrowForward />}>
        End Icon
      </Button>
      <Button {...args} startIcon={<Add />} endIcon={<ArrowForward />}>
        Both Icons
      </Button>
    </div>
  ),
  args: {
    children: undefined,
  },
};

export const FileUpload: Story = {
  render: (args) => (
    <Button
      {...args}
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload files
      <VisuallyHiddenInput
        type="file"
        multiple
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          console.log(event.target.files)
        }
      />
    </Button>
  ),
  args: {
    children: undefined,
  },
};

export const Loading: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Button {...args} disabled startIcon={<CircularProgress size={20} color="inherit" />}>
        Loading
      </Button>
      <Button {...args} variant="outlined" disabled endIcon={<CircularProgress size={20} color="inherit" />}>
        Loading Outlined
      </Button>
      <Button {...args} variant="text" disabled>
        <CircularProgress size={20} color="inherit" style={{ marginRight: 8 }} />
        Loading Text
      </Button>
    </div>
  ),
  args: {
    children: undefined,
  },
};
