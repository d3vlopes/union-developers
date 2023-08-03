import { HeroModel } from '@/domain/models'

import { heroMapperMock as mock } from './mock'

import { HeroMapper } from '.'

describe('HeroMapper', () => {
  describe('toDomain', () => {
    it('should return the right format when mapped', () => {
      const data = HeroMapper.toDomain(mock)

      expect(data).toStrictEqual({
        title: mock.title.html,
        description: mock.subtitle,
        logoUrl: mock.logo.url,
        logoAlt: mock.logo.description,
        backgroundDesktop: mock.backgroundDesktop.url,
        backgroundMobile: mock.backgroundMobile.url,
        buttonTarget: mock.buttonTarget,
        buttonText: mock.buttonText,
      } as HeroModel)
    })
  })
})
