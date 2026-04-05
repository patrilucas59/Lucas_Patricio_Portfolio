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
      sx={{
        backgroundColor: props.backgroundColor,
        textColor: props.textColor,
        borderRadius: props.borderRadius,
      }}
    >
      {props.children}
    </AnimatedButton>
  )
}