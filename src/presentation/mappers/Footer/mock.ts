import { FooterRemote } from '@/api/models'
import { footerMock } from '@/presentation/components/molecules/Footer/mock'

export const footerMapperMock: FooterRemote = {
  ...footerMock,
  logo: {
    url: footerMock.logo.imgUrl,
    description: footerMock.logo.alt,
  },
  navigationMenuLinks: footerMock.navigationMenuLinks,
  socialLinks: footerMock.socialLinks.map((socialLink) => ({
    id: socialLink.id,
    name: socialLink.label,
    url: socialLink.target,
    icon: {
      url: socialLink.icon.imgUrl,
    },
  })),
}
