import React, { type ReactNode } from 'react';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { ZButton } from '../../Primitives/ZButton/ZButton';

export type SocialProvider = 'google' | 'facebook' | 'apple';

export type SocialIntegrationConfig = {
  id: string;
  label: string;
  icon?: ReactNode;
  color?: 'google' | 'facebook' | 'apple' | 'github' | 'default';
  onClick?: React.ComponentProps<typeof ZButton>['onClick'];
  disabled?: boolean;
};

export type SocialIntegration = SocialProvider | SocialIntegrationConfig;

const socialProviderDefaults: Record<SocialProvider, SocialIntegrationConfig> = {
  google: { id: 'google', label: 'Google', icon: <GoogleIcon />, color: 'google' },
  facebook: { id: 'facebook', label: 'Facebook', icon: <FacebookIcon />, color: 'facebook' },
  apple: { id: 'apple', label: 'Apple', icon: <AppleIcon />, color: 'apple' },
};

export const defaultSocialIntegrations: SocialProvider[] = ['google', 'facebook', 'apple'];

export const resolveSocialIntegration = (
  integration: SocialIntegration,
): SocialIntegrationConfig => {
  return typeof integration === 'string' ? socialProviderDefaults[integration] : integration;
};
