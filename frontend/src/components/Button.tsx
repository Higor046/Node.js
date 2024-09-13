import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

interface ButtonProps extends MuiButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button', ...rest }) => {
  return (
    <MuiButton
      variant="contained"
      color="primary"
      onClick={onClick}
      type={type}
      {...rest} // Permite passar outras propriedades do MUI Button
    >
      {children}
    </MuiButton>
  );
};

export default Button;
