import { MethodologyModel } from '@/domain/models'

import { useAnimation } from '@/presentation/hooks'

import * as S from '../styles'

interface MethodologyCardProps {
  methodology: MethodologyModel
}

export const MethodologyCard = ({
  methodology,
}: MethodologyCardProps) => {
  const { inView, ref } = useAnimation()

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <S.Card
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={animationVariants}
      whileInView="visible"
      viewport={{ once: true, amount: 'all' }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <S.Header>
        <h3>{methodology.title}</h3>
      </S.Header>
      <S.Content>
        <p>{methodology.description}</p>
      </S.Content>
    </S.Card>
  )
}
