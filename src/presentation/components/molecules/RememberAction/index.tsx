import { RememberActionModel } from '@/domain/models'

import { Button } from '@/presentation/components/atoms'

import * as S from './styles'

export type RememberActionProps = RememberActionModel

export const RememberAction = ({
  title,
  subtitle,
  buttonText,
  buttonTarget,
  logoUrl,
  logoAlt,
}: RememberActionProps) => {
  return (
    <S.Wrapper>
      <S.Logo src={logoUrl} alt={logoAlt} />
      <S.ContentWrapper>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <a href={buttonTarget}>
          <Button>{buttonText}</Button>
        </a>
      </S.ContentWrapper>
    </S.Wrapper>
  )
}
