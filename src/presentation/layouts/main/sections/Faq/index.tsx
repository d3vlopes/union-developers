import { FaqSectionType } from '@/domain/models'

import { AccordionProps } from '@/presentation/components/molecules'

import { Headline } from '@/presentation/components/atoms'
import { QuestionsAccordion } from '@/presentation/components/organisms'

import * as S from './styles'

export const FaqSection = ({
  id,
  heading,
  accordions,
}: FaqSectionType<AccordionProps>) => {
  return (
    <S.Wrapper id={id}>
      <Headline>{heading}</Headline>

      <S.QuestionsWrapper>
        <QuestionsAccordion accordions={accordions} />
      </S.QuestionsWrapper>
    </S.Wrapper>
  )
}
