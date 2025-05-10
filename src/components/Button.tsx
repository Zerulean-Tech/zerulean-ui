import React from 'react';
import MUIButton, { type ButtonProps } from '@mui/material/Button';
import './Button.scss';

/**
 * Button - A reusable button component with cerulean blue gradient branding.
 *
 * @param props - MUI ButtonProps plus children.
 */
export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  ...props
}) => {
  const isContained = variant === 'contained' || variant === undefined;
  const isOutlined = variant === 'outlined';
  const isText = variant === 'text';
  return (
    <MUIButton
      {...props}
      variant={variant}
      className={
        [
          isContained && 'zerulean-gradient',
          isOutlined && 'zerulean-outline',
          isText && 'zerulean-text',
          className
        ].filter(Boolean).join(' ')
      }
    />
  );
};

export default Button;