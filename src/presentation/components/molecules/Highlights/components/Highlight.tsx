import { HighlightModel } from '@/domain/models'

import { useAnimation } from '@/presentation/hooks'

import * as S from '../styles'

interface HighlightProps {
  highlight: HighlightModel
}

export const Highlight = ({ highlight }: HighlightProps) => {
  const { inView, ref } = useAnimation()

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <S.Highlight
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={animationVariants}
      whileInView="visible"
      viewport={{ once: true, amount: 'all' }}
      transition={{ duration: 0.5, type: 'tween' }}
    >
      <S.IconWrapper>
        <img src={highlight.icon.url} alt={highlight.icon.alt} />
      </S.IconWrapper>
      <S.ContentWrapper>
        <h3>{highlight.title}</h3>
        <p>{highlight.description}</p>
      </S.ContentWrapper>
    </S.Highlight>
  )
}
