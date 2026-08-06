import React, { type ReactNode } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '../../Primitives/Typography/Typography';
import './ZDashboard.scss';

export type ZDashboardProps = {
  children: ReactNode;
  sidebar?: ReactNode;
  footer?: ReactNode;
  appLogo?: ReactNode;
  title?: ReactNode;
  user?: ReactNode;
  quickActions?: ReactNode;
  notifications?: ReactNode;
  sidebarLabel?: string;
  className?: string;
};

export const ZDashboard: React.FC<ZDashboardProps> = ({
  children,
  sidebar,
  footer,
  appLogo,
  title = 'Zerulean Dashboard',
  user,
  quickActions,
  notifications,
  sidebarLabel = 'Dashboard navigation',
  className,
}) => {
  const classes = ['zerulean-dashboard-layout', className].filter(Boolean).join(' ');

  return (
    <Box className={classes}>
      <AppBar position="static" elevation={0} className="zerulean-dashboard-layout__header">
        <Toolbar className="zerulean-dashboard-layout__toolbar">
          <Box className="zerulean-dashboard-layout__brand">
            {appLogo ? <Box className="zerulean-dashboard-layout__logo">{appLogo}</Box> : null}
            <Typography component="span" weight="bold">
              {title}
            </Typography>
          </Box>
          <Stack direction="row" spacing={1} alignItems="center">
            {quickActions ? (
              <Box className="zerulean-dashboard-layout__quick-actions">{quickActions}</Box>
            ) : null}
            {notifications ? (
              <Box className="zerulean-dashboard-layout__notifications">{notifications}</Box>
            ) : null}
            {user ? <Box className="zerulean-dashboard-layout__user">{user}</Box> : null}
          </Stack>
        </Toolbar>
      </AppBar>

      {sidebar ? (
        <Drawer
          variant="permanent"
          className="zerulean-dashboard-layout__sidebar"
          PaperProps={{ component: 'aside', 'aria-label': sidebarLabel }}
        >
          <Box className="zerulean-dashboard-layout__sidebar-content">{sidebar}</Box>
        </Drawer>
      ) : null}

      <Box component="main" className="zerulean-dashboard-layout__main">
        {children}
      </Box>

      {footer ? (
        <Box component="footer" className="zerulean-dashboard-layout__footer">
          {footer}
        </Box>
      ) : null}
    </Box>
  );
};

export default ZDashboard;
