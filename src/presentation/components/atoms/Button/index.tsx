'use client'

import { ReactNode } from 'react'

import * as S from './styles'

export interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export const Button = ({
  children,
  variant = 'primary',
}: ButtonProps) => {
  return <S.Button variant={variant}>{children}</S.Button>
}
