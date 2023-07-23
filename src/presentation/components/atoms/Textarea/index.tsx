import { TextareaHTMLAttributes, forwardRef } from 'react'

import * as S from './styles'

export type BaseTextareaProps =
  TextareaHTMLAttributes<HTMLTextAreaElement>

export interface TextareaProps extends BaseTextareaProps {
  error?: string
}

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ error, ...props }, ref) => (
  <S.Wrapper error={error}>
    <textarea ref={ref} {...props} />
    {!!error && <span>{error}</span>}
  </S.Wrapper>
))

Textarea.displayName = 'Textarea'
