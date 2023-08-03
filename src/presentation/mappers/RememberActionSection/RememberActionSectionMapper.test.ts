import { RememberActionSectionType } from '@/domain/models'

import { rememberActionSectionMapperMock as mock } from './mock'

import { RememberActionSectionMapper } from '.'

describe('RememberActionSectionMapper', () => {
  describe('toDomain', () => {
    it('should return the right format when mapped', () => {
      const data = RememberActionSectionMapper.toDomain(mock)

      expect(data).toStrictEqual({
        title: mock.title,
        subtitle: mock.subtitle,
        logoUrl: mock.logo.url,
        logoAlt: mock.logo.description ?? '',
        buttonText: mock.buttonText,
        buttonTarget: mock.buttonTarget,
      } as RememberActionSectionType)
    })
  })
})
