import React, { type ElementType, type ReactNode } from 'react';
import MuiTypography, { type TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import './Typography.scss';

export type TypographyTone = 'primary' | 'secondary' | 'muted' | 'accent';
export type TypographyAlign = 'left' | 'center' | 'right' | 'justify';

export type ZeruleanTypographyProps = Omit<MuiTypographyProps, 'children' | 'component'> & {
  children?: ReactNode;
  component?: ElementType;
  tone?: TypographyTone;
  align?: TypographyAlign;
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  uppercase?: boolean;
};

export type TypographyProps = ZeruleanTypographyProps;

export const Typography: React.FC<TypographyProps> = ({
  className,
  component,
  tone = 'primary',
  align = 'left',
  weight = 'regular',
  uppercase = false,
  ...props
}) => {
  const classes = [
    'zerulean-typography',
    `zerulean-typography--${tone}`,
    `zerulean-typography--${align}`,
    `zerulean-typography--${weight}`,
    uppercase && 'zerulean-typography--uppercase',
    className,
  ].filter(Boolean).join(' ');

  return <MuiTypography {...props} component={component as ElementType} className={classes} />;
};

export default Typography;
