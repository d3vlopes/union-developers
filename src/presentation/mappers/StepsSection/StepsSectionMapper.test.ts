import { StepsSectionType } from '@/domain/models'

import { stepSectionMapperMock as mock } from './mock'

import { StepsSectionMapper } from '.'

describe('StepsSectionMapper', () => {
  describe('toDomain', () => {
    it('should return the right format when mapped', () => {
      const data = StepsSectionMapper.toDomain(mock)

      expect(data).toStrictEqual({
        id: mock.sectionId,
        heading: mock.heading,
        description: mock.description,
        steps: mock.stepsProcessSeletive,
      } as StepsSectionType)
    })
  })
})
