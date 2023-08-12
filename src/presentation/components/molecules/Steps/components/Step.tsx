import { motion } from '@/libs/animations'

import { useAnimation } from '@/presentation/hooks'

import { StepModel } from '@/domain/models'

import * as S from '../styles'

interface StepProps {
  item: StepModel
}

export const Step = ({ item }: StepProps) => {
  const { inView, ref } = useAnimation()

  const animationVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.li>
      <S.ContentWrapper
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={animationVariants}
        whileInView="visible"
        transition={{ duration: 0.3 }}
        viewport={{
          once: true,
          amount: 'some',
        }}
      >
        <span>{item.number}</span>

        <S.TextWrapper
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={animationVariants}
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1, type: 'tween' }}
          viewport={{
            once: true,
            amount: 'all',
          }}
        >
          <S.Title>{item.title}</S.Title>
          <S.Description>{item.description}</S.Description>
        </S.TextWrapper>
      </S.ContentWrapper>
    </motion.li>
  )
}
