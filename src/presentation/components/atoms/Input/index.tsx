import { InputHTMLAttributes, forwardRef } from 'react'

import * as S from './styles'

export type BaseInputProps = InputHTMLAttributes<HTMLInputElement>

export interface InputProps extends BaseInputProps {
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...props }, ref) => (
    <S.Wrapper error={error}>
      <input ref={ref} {...props} />
      {!!error && <span>{error}</span>}
    </S.Wrapper>
  ),
)

Input.displayName = 'Input'
