import { FooterModel } from '@/domain/models'

import { footerMapperMock as mock } from './mock'

import { FooterMapper } from '.'

describe('FooterMapper', () => {
  describe('toDomain', () => {
    it('should return the right format when mapped', () => {
      const data = FooterMapper.toDomain(mock)

      expect(data).toStrictEqual({
        companyName: mock.companyName,
        companySlogan: mock.companySlogan,
        logo: {
          imgUrl: mock.logo.url,
          alt: mock.logo.description ?? '',
        },
        navigationMenuLinks: mock.navigationMenuLinks,
        socialLinks: mock.socialLinks.map((socialLink) => ({
          id: socialLink.id,
          label: socialLink.name,
          target: socialLink.url,
          icon: {
            imgUrl: socialLink.icon.url,
            alt: socialLink.name,
          },
        })),
      } as FooterModel)
    })
  })
})
