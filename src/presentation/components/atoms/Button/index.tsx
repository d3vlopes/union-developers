import { ButtonHTMLAttributes, ReactNode } from 'react'

import * as S from './styles'

type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export interface ButtonProps extends BaseButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export const Button = ({
  children,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <S.Button variant={variant} {...props}>
      <span>{children}</span>
    </S.Button>
  )
}
