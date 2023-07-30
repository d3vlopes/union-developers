import {
  Accordion,
  AccordionProps,
} from '@/presentation/components/molecules'

export const QuestionTemplate = (accordion: AccordionProps) => {
  return <Accordion key={accordion.title} {...accordion} />
}
