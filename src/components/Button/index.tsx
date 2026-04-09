import styled from "@emotion/styled"
import { Button } from "@mui/material";
import React, { ReactNode } from 'react'

export type ButtonType = {
  size?: 'small' | 'medium' | 'large';
  variant?: 'contained' | 'outlined' | 'text';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  backgroundColor?: string;
  textColor?: string;
  borderRadius: string;
  startIcon?: ReactNode; 
}

const AnimatedButton = styled(Button)`
  position: relative;
  overflow: hidden;
`

export function StyledButton(props: ButtonType) {
  return (
    <AnimatedButton
      size={props.size}
      variant={props.variant}
      onClick={props.onClick}
      startIcon={props.startIcon}
      sx={{
        backgroundColor: props.backgroundColor,
        color: props.textColor,
        borderRadius: props.borderRadius,

        "&:hover": {
          transform: 'scale(1.05)',
          filter: 'brightness(1.1)',
          boxShadow: '0 6px 18px #D4AF37',
        }
      }}
    >
      {props.children}
    </AnimatedButton>
  )
}