import DashboardIcon from '@mui/icons-material/Dashboard';
import AddIcon from '@mui/icons-material/Add';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import type { Meta, StoryObj } from '@storybook/react';
import { ZButton } from '../../Primitives/ZButton/ZButton';
import { Typography } from '../../Primitives/Typography/Typography';
import { ZDashboard } from './ZDashboard';

const meta: Meta<typeof ZDashboard> = {
  title: 'Templates/ZDashboard',
  component: ZDashboard,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    appLogo: (
      <Box
        component="img"
        src="/logo_plain-nobg.png"
        alt="Zerulean logo"
        sx={{ width: 32, height: 32, objectFit: 'contain' }}
      />
    ),
    title: 'Zerulean Dashboard',
    quickActions: (
      <ZButton size="small" startIcon={<AddIcon />}>
        New
      </ZButton>
    ),
    notifications: (
      <ZButton variant="text" size="small" aria-label="Notifications">
        <NotificationsNoneIcon />
      </ZButton>
    ),
    user: (
      <ZButton variant="text" aria-label="Open account menu" title="Alex Morgan">
        <Avatar alt="Alex Morgan" sx={{ width: 36, height: 36 }}>
          AM
        </Avatar>
      </ZButton>
    ),
    sidebar: (
      <List component="nav" aria-label="Primary navigation" sx={{ p: 1 }}>
        <ListItemButton selected sx={{ borderRadius: 1 }}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItemButton>
        <ListItemButton sx={{ borderRadius: 1 }}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
    ),
    footer: <Box sx={{ p: 2 }}>© 2026 Zerulean UI</Box>,
    children: (
      <Box>
        <Typography component="h2" variant="h4" weight="bold">
          Overview
        </Typography>
        <Typography tone="secondary">Your dashboard content goes here.</Typography>
      </Box>
    ),
  },
  argTypes: {
    appLogo: { control: false },
    title: { control: 'text' },
    user: { control: false },
    quickActions: { control: false },
    notifications: { control: false },
    sidebar: { control: false },
    footer: { control: false },
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof ZDashboard>;

export const Default: Story = {};

export const ContentOnly: Story = {
  args: {
    appLogo: undefined,
    title: undefined,
    user: undefined,
    quickActions: undefined,
    notifications: undefined,
    sidebar: undefined,
    footer: undefined,
  },
};
