import { FaqSectionType } from '@/domain/models'
import { AccordionProps } from '@/presentation/components/molecules'

import { faqSectionMapper as mock } from './mock'

import { FaqSectionMapper } from '.'

describe('FaqSectionMapper', () => {
  describe('toDomain', () => {
    it('should return the right format when mapped', () => {
      const data = FaqSectionMapper.toDomain(mock)

      expect(data).toStrictEqual({
        id: mock.sectionId,
        heading: mock.heading,
        accordions: mock.questions.map((question) => ({
          title: question.title,
          content: question.content.html,
        })),
      } as FaqSectionType<AccordionProps>)
    })
  })
})
