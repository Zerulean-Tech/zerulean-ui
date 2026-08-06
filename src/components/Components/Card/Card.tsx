import React, { type ReactNode } from 'react';
import MuiCard, { type CardProps as MuiCardProps } from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Card.scss';

export type ZeruleanCardProps = Omit<MuiCardProps, 'children' | 'content'> & {
  title?: ReactNode;
  subtitle?: ReactNode;
  content?: ReactNode;
  actions?: ReactNode;
  media?: ReactNode;
  children?: ReactNode;
  hoverAnimation?: boolean;
};

export type CardProps = ZeruleanCardProps;

export const Card: React.FC<CardProps> = ({
  className,
  title,
  subtitle,
  content,
  actions,
  media,
  children,
  role,
  hoverAnimation = false,
  ...props
}) => {
  const classes = [
    'zerulean-card',
    !hoverAnimation && 'zerulean-card--no-hover-animation',
    className,
  ].filter(Boolean).join(' ');

  return (
    <MuiCard {...props} className={classes} role={role ?? 'article'}>
      {media ? <div className="zerulean-card__media">{media}</div> : null}

      {(title || subtitle) ? (
        <div className="zerulean-card__header">
          {title ? (
            <Typography component="h3" variant="h6" className="zerulean-card__title">
              {title}
            </Typography>
          ) : null}
          {subtitle ? (
            <Typography variant="body2" color="text.secondary" className="zerulean-card__subtitle">
              {subtitle}
            </Typography>
          ) : null}
        </div>
      ) : null}

      {(content || children) ? (
        <CardContent className="zerulean-card__content">
          {content ?? children}
        </CardContent>
      ) : null}

      {actions ? (
        <CardActions className="zerulean-card__actions">{actions}</CardActions>
      ) : null}
    </MuiCard>
  );
};

export default Card;
