import styled from "@emotion/styled"
import { Button } from "@mui/material"
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
  transition: color 0.4s ease;

  &::before,
  &::after,
  span::before,
  span::after {
    content: "";
    position: absolute;
    background-color: #d9d9e2;
    transition: all 0.3s ease;
  }

  &::before {
    top: 0;
    left: 0;
    height: 2px;
    width: 0;
  }

  &::after {
    top: 0;
    right: 0;
    width: 2px;
    height: 0;
    transition-delay: 0.1s;
  }

  span::before {
    bottom: 0;
    right: 0;
    height: 2px;
    width: 0;
    transition-delay: 0.2s;
  }

  span::after {
    bottom: 0;
    left: 0;
    width: 2px;
    height: 0;
    transition-delay: 0.3s;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover::after {
    height: 100%;
  }

  &:hover span::before {
    width: 100%;
  }

  &:hover span::after {
    height: 100%;
  }
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