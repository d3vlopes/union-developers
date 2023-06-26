import * as S from './styles'

export type SampleProps = {
  title: string
}

export const Sample = ({ title }: SampleProps) => {
  return (
    <S.Wrapper>
      <h1>{title}</h1>
    </S.Wrapper>
  )
}
