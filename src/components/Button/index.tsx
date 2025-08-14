import styled from "@emotion/styled"
import { Button } from "@mui/material"
import React, { ReactNode } from 'react'

export type ButtonType = {
  size?: 'small' | 'medium' | 'large'
  variant?: 'contained' | 'outlined' | 'text'
  onClick: () => void
  children: ReactNode
}

export function StyledButton(props: ButtonType) {
  return (
    <Button
      size={props.size}
      variant={props.variant}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  )
}