import { AccordionProps } from '@/presentation/components/molecules'

import { QuestionTemplate } from './templates'

import * as S from './styles'

export interface QuestionsAccordionProps {
  accordions: AccordionProps[]
}

export const QuestionsAccordion = ({
  accordions,
}: QuestionsAccordionProps) => {
  return <S.Wrapper>{accordions.map(QuestionTemplate)}</S.Wrapper>
}
