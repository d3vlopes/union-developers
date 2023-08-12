import { RememberActionModel } from '@/domain/models'

import { handleAnalityClick } from '@/libs/monitoring'

import { Button } from '@/presentation/components/atoms'

import { makeFloatingAnimation } from './animations'

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
  const logoAnimation = makeFloatingAnimation()

  function handleButtonClick() {
    handleAnalityClick({
      event_category: 'Click',
      event_label: 'Remember Action',
      event_action: 'Clique no botão',
    })
  }

  return (
    <S.Wrapper>
      <S.Logo src={logoUrl} alt={logoAlt} {...logoAnimation} />
      <S.ContentWrapper>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <a href={buttonTarget} onClick={handleButtonClick}>
          <Button>{buttonText}</Button>
        </a>
      </S.ContentWrapper>
    </S.Wrapper>
  )
}
