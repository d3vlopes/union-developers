import { HighlightSectionType } from '@/domain/models'

import { highlightMapperMock as mock } from './mock'

import { HighlightSectionMapper } from '.'

describe('HighlightSectionMapper', () => {
  describe('toDomain', () => {
    it('should return the right format when mapped', () => {
      const data = HighlightSectionMapper.toDomain(mock)

      expect(data).toStrictEqual({
        id: mock.sectionId,
        heading: mock.heading,
        description: mock.description,
        highlights: mock.highlights.map((highlight) => ({
          id: highlight.id,
          title: highlight.title,
          description: highlight.description,
          icon: {
            url: highlight.icon.url,
            alt: highlight.icon.description ?? '',
          },
        })),
      } as HighlightSectionType)
    })
  })
})
