import { FaqSectionRemote } from '@/api/models'

import { accordionsMock } from '@/presentation/components/organisms/QuestionsAccordion/mock'

export const faqSectionMapper: FaqSectionRemote = {
  sectionId: 'questions',
  heading: 'Dúvidas',
  questions: accordionsMock.map((question) => ({
    title: question.title,
    content: {
      html: question.content,
    },
  })),
}
