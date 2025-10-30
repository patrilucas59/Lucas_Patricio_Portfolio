import styled from "@emotion/styled"
import { Button } from "@mui/material";
import React, { ReactNode } from 'react'

export type ButtonType = {
  size?: 'small' | 'medium' | 'large';
  variant?: 'contained' | 'outlined' | 'text';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  color?: 'primary' | 'secondary' | 'inherit' | 'success' | 'error' | 'info' | 'warning';
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
      color={props.color}
      onClick={props.onClick}
    >
      {props.children}
    </AnimatedButton>
  )
}