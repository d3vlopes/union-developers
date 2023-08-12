import { motion } from '@/libs/animations'

import { sanitizeHTML } from '@/libs/sanitizers'
import { handleAnalityClick } from '@/libs/monitoring'

import { Button } from '@/presentation/components/atoms'

import { HeroProps } from './types'

import {
  makeFadeInAnimation,
  makeFloatingAnimation,
} from './animations'

import * as S from './styles'

export const Hero = (props: HeroProps) => {
  const clearHTML = sanitizeHTML(props.title)

  const titleAnimation = makeFadeInAnimation(0.3)
  const descriptionAnimation = makeFadeInAnimation(0.6)
  const buttonAnimation = makeFadeInAnimation(0.9)
  const logoAnimation = makeFloatingAnimation()

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
      <S.Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <S.ContentWrapper>
          <S.Title
            dangerouslySetInnerHTML={{ __html: clearHTML }}
            {...titleAnimation}
          />
          <S.Description {...descriptionAnimation}>
            {props.description}
          </S.Description>

          <motion.a
            href={props.buttonTarget}
            onClick={handleButtonClick}
            {...buttonAnimation}
          >
            <Button>{props.buttonText}</Button>
          </motion.a>
        </S.ContentWrapper>

        <S.Logo
          src={props.logoUrl}
          alt={props.logoAlt}
          {...logoAnimation}
        />
      </S.Container>
    </S.Wrapper>
  )
}
