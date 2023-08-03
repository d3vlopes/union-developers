import { HeaderModel } from '@/domain/models'

import { headerMapperMock as mock } from './mock'

import { HeaderMapper } from '.'

describe('HeaderMapper', () => {
  describe('toDomain', () => {
    it('should return the right format when mapped', () => {
      const data = HeaderMapper.toDomain(mock)

      expect(data).toStrictEqual({
        logoUrl: mock.logo.url,
        logoAlt: mock.logo.description,
        buttonTarget: mock.buttonTarget,
        buttonText: mock.buttonText,
        navigationLinks: mock.navigationLinks,
      } as HeaderModel)
    })
  })
})
