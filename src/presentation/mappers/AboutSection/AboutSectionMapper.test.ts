import { AboutSectionType } from '@/domain/models'

import { aboutSectionMapperMock as mock } from './mock'

import { AboutSectionMapper } from '.'

describe('AboutSectionMapper', () => {
  describe('toDomain', () => {
    it('should return the right format when mapped', () => {
      const data = AboutSectionMapper.toDomain(mock)

      expect(data).toStrictEqual({
        id: mock.sectionId,
        description: mock.description.html,
        heading: mock.heading,
      } as AboutSectionType)
    })
  })
})
