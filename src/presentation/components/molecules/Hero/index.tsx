import { sanitizeHTML } from '@/libs/sanitizers'
import { handleAnalityClick } from '@/libs/monitoring'

import { Button } from '@/presentation/components/atoms'

import { HeroProps } from './types'

import * as S from './styles'

export const Hero = (props: HeroProps) => {
  const clearHTML = sanitizeHTML(props.title)

  function handleButtonClick() {
    handleAnalityClick({
      event_category: 'Click',
      event_label: 'Hero',
      event_action: 'Clique no botão',
    })
  }

  return (
    <S.Wrapper
      backgroundMobile={props.backgroundMobile}
      backgroundDesktop={props.backgroundDesktop}
    >
      <S.Container>
        <S.ContentWrapper>
          <S.Title dangerouslySetInnerHTML={{ __html: clearHTML }} />
          <S.Description>{props.description}</S.Description>

          <a href={props.buttonTarget} onClick={handleButtonClick}>
            <Button>{props.buttonText}</Button>
          </a>
        </S.ContentWrapper>

        <S.Logo src={props.logoUrl} alt={props.logoAlt} />
      </S.Container>
    </S.Wrapper>
  )
}
