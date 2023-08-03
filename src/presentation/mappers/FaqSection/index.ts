import { FaqSectionType } from '@/domain/models'
import { FaqSectionRemote } from '@/api/models'

import { AccordionProps } from '@/presentation/components/molecules'

export class FaqSectionMapper {
  static toDomain(
    faqSectionRemote: FaqSectionRemote,
  ): FaqSectionType<AccordionProps> {
    return {
      id: faqSectionRemote.sectionId,
      heading: faqSectionRemote.heading,
      accordions: faqSectionRemote.questions.map((question) => ({
        title: question.title,
        content: question.content.html,
      })),
    }
  }
}
