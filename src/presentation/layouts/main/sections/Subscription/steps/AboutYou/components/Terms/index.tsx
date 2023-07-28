import { TermModel } from '@/domain/models'

import { sanitizeHTML } from '@/libs/sanitizers'

import * as S from './styles'

export type TermsProps = TermModel

export const Terms = ({ title, subtitle, content }: TermsProps) => {
  const clearContent = sanitizeHTML(content)

  return (
    <S.Wrapper>
      <S.Container>
        <h2>{title}</h2>
      </S.Container>

      <hr />

      <S.Container>
        <h3>{subtitle}</h3>
      </S.Container>

      <S.Container>
        <S.Content
          data-testid="content"
          dangerouslySetInnerHTML={{ __html: clearContent }}
        />
      </S.Container>
    </S.Wrapper>
  )
}
