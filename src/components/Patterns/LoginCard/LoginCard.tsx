import React, { type FormEventHandler, type MouseEventHandler, type ReactNode } from 'react';
import MuiCard, { type CardProps as MuiCardProps } from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { ZButton } from '../../Primitives/ZButton/ZButton';
import {
  defaultSocialIntegrations,
  resolveSocialIntegration,
  type SocialIntegration,
  type SocialIntegrationConfig,
} from './socialIntegrations';
import './LoginCard.scss';

export type LoginCardProps = Omit<MuiCardProps, 'children' | 'title'> & {
  title?: ReactNode;
  subtitle?: ReactNode;
  emailLabel?: string;
  passwordLabel?: string;
  submitLabel?: ReactNode;
  forgotPasswordLabel?: ReactNode;
  createAccountLabel?: ReactNode;
  showForgotPassword?: boolean;
  showCreateAccount?: boolean;
  socialIntegrations?: SocialIntegration[];
  socialLayout?: 'linear' | 'stack';
  onSubmit?: FormEventHandler<HTMLFormElement>;
  onForgotPassword?: MouseEventHandler<HTMLButtonElement>;
  onCreateAccount?: MouseEventHandler<HTMLButtonElement>;
  onSocialIntegrationClick?: (integration: SocialIntegrationConfig) => void;
};

export const LoginCard: React.FC<LoginCardProps> = ({
  className,
  title = 'Welcome back',
  subtitle = 'Sign in to continue to your account.',
  emailLabel = 'Email address',
  passwordLabel = 'Password',
  submitLabel = 'Sign in',
  forgotPasswordLabel = 'Forgot password?',
  createAccountLabel = 'Create account',
  showForgotPassword = true,
  showCreateAccount = true,
  socialIntegrations = defaultSocialIntegrations,
  socialLayout = 'stack',
  onSubmit,
  onForgotPassword,
  onCreateAccount,
  onSocialIntegrationClick,
  ...props
}) => {
  const classes = ['zerulean-login-card', className].filter(Boolean).join(' ');

  return (
    <MuiCard {...props} className={classes}>
      <div className="zerulean-login-card__header">
        <h2 className="zerulean-login-card__title">{title}</h2>
        {subtitle ? <p className="zerulean-login-card__subtitle">{subtitle}</p> : null}
      </div>

      <form className="zerulean-login-card__form" onSubmit={onSubmit}>
        <TextField
          label={emailLabel}
          name="email"
          type="email"
          autoComplete="email"
          required
          fullWidth
        />
        <TextField
          label={passwordLabel}
          name="password"
          type="password"
          autoComplete="current-password"
          required
          fullWidth
        />
        {showForgotPassword ? (
          <ZButton
            className="zerulean-login-card__forgot-password"
            variant="text"
            size="small"
            type="button"
            onClick={onForgotPassword}
          >
            {forgotPasswordLabel}
          </ZButton>
        ) : null}
        <ZButton type="submit" fullWidth>
          {submitLabel}
        </ZButton>
      </form>

      {socialIntegrations.length > 0 ? (
        <div className="zerulean-login-card__social">
          <Divider className="zerulean-login-card__divider">or continue with</Divider>
          <div
            className={`zerulean-login-card__social-list zerulean-login-card__social-list--${socialLayout}`}
          >
            {socialIntegrations.map((integration) => {
              const {
                id,
                label,
                icon,
                color = 'default',
                onClick: handleClick,
                disabled,
              } = resolveSocialIntegration(integration);
              const isLinear = socialLayout === 'linear';

              return (
                <ZButton
                  key={id}
                  className={`zerulean-login-card__social-button zerulean-login-card__social-button--${color}`}
                  variant={isLinear ? 'contained' : 'outlined'}
                  fullWidth={!isLinear}
                  startIcon={isLinear ? undefined : icon}
                  aria-label={label}
                  title={label}
                  onClick={(event) => {
                    handleClick?.(event);
                    onSocialIntegrationClick?.(resolveSocialIntegration(integration));
                  }}
                  disabled={disabled}
                >
                  {isLinear ? icon : label}
                </ZButton>
              );
            })}
          </div>
        </div>
      ) : null}

      {showCreateAccount ? (
        <div className="zerulean-login-card__create-account">
          <ZButton variant="outlined" fullWidth type="button" onClick={onCreateAccount}>
            {createAccountLabel}
          </ZButton>
        </div>
      ) : null}
    </MuiCard>
  );
};

export default LoginCard;
