import { PillarsSectionType } from '@/domain/models'

import { pillarsSectionMapperMock as mock } from './mock'

import { PillarsSectionMapper } from '.'

describe('PillarsSectionMapper', () => {
  describe('toDomain', () => {
    it('should return the right format when mapped', () => {
      const data = PillarsSectionMapper.toDomain(mock)

      expect(data).toStrictEqual({
        id: mock.sectionId,
        heading: mock.heading,
        description: mock.description.html,
        methodologyCards: mock.methodologys.map((methodology) => ({
          id: methodology.id,
          title: methodology.name,
          description: methodology.description,
        })),
      } as PillarsSectionType)
    })
  })
})
