import { InputHTMLAttributes, forwardRef } from 'react'

import * as S from './styles'

type BaseInputProps = InputHTMLAttributes<HTMLInputElement>

export interface CheckboxProps extends BaseInputProps {
  error?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ error, ...props }, ref) => (
    <S.Wrapper>
      <input ref={ref} type="checkbox" {...props} />
      {!!error && <span>{error}</span>}
    </S.Wrapper>
  ),
)

Checkbox.displayName = 'Checkbox'
