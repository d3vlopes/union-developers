import * as S from './styles'

export interface HeadlineProps {
  children: string
}

export const Headline = ({ children }: HeadlineProps) => {
  return (
    <S.Wrapper>
      <S.LineLeft aria-label="Linha a esquerda do titulo" />
      <S.Headline>{children}</S.Headline>
      <S.LineRight aria-label="Linha a direita do titulo" />
    </S.Wrapper>
  )
}
