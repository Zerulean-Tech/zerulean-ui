import React, { type ReactNode } from 'react';
import MuiAvatar from '@mui/material/Avatar';
import MuiCard, { type CardProps as MuiCardProps } from '@mui/material/Card';
import { Typography } from '../../Primitives/Typography/Typography';
import './AvatarCard.scss';

export type AvatarCardStatus = 'online' | 'away' | 'busy' | 'offline';
export type AvatarCardLayout = 'horizontal' | 'vertical';

export type AvatarCardProps = Omit<MuiCardProps, 'children' | 'title'> & {
  name: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  avatar?: ReactNode;
  avatarSrc?: string;
  avatarAlt?: string;
  initials?: ReactNode;
  status?: AvatarCardStatus;
  actions?: ReactNode;
  layout?: AvatarCardLayout;
  fullWidth?: boolean;
};

export const AvatarCard: React.FC<AvatarCardProps> = ({
  className,
  name,
  subtitle,
  description,
  avatar,
  avatarSrc,
  avatarAlt,
  initials,
  status,
  actions,
  layout = 'horizontal',
  fullWidth = false,
  ...props
}) => {
  const classes = [
    'zerulean-avatar-card',
    `zerulean-avatar-card--${layout}`,
    fullWidth && 'zerulean-avatar-card--full-width',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <MuiCard {...props} className={classes}>
      <div className="zerulean-avatar-card__main">
        <div className="zerulean-avatar-card__avatar-wrapper">
          {avatar ?? (
            <MuiAvatar src={avatarSrc} alt={avatarAlt ?? String(name)}>
              {initials}
            </MuiAvatar>
          )}
          {status ? (
            <span
              className={`zerulean-avatar-card__status zerulean-avatar-card__status--${status}`}
              role="img"
              aria-label={`${status} status`}
            />
          ) : null}
        </div>

        <div className="zerulean-avatar-card__details">
          <Typography component="h3" weight="semibold" className="zerulean-avatar-card__name">
            {name}
          </Typography>
          {subtitle ? (
            <Typography tone="muted" variant="body2" className="zerulean-avatar-card__subtitle">
              {subtitle}
            </Typography>
          ) : null}
          {description ? (
            <Typography
              tone="secondary"
              variant="body2"
              className="zerulean-avatar-card__description"
            >
              {description}
            </Typography>
          ) : null}
        </div>
      </div>

      {actions ? <div className="zerulean-avatar-card__actions">{actions}</div> : null}
    </MuiCard>
  );
};

export default AvatarCard;
