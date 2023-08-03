import { FooterRemote } from '@/api/models'
import { FooterModel } from '@/domain/models'

export class FooterMapper {
  static toDomain(footerRemote: FooterRemote): FooterModel {
    return {
      companyName: footerRemote.companyName,
      companySlogan: footerRemote.companySlogan,
      logo: {
        imgUrl: footerRemote.logo.url,
        alt: footerRemote.logo.description ?? '',
      },
      navigationMenuLinks: footerRemote.navigationMenuLinks,
      socialLinks: footerRemote.socialLinks.map((socialLink) => ({
        id: socialLink.id,
        label: socialLink.name,
        target: socialLink.url,
        icon: {
          imgUrl: socialLink.icon.url,
          alt: socialLink.name,
        },
      })),
    }
  }
}
