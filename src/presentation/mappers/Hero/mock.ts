import { HeroRemote } from '@/api/models'
import { heroMockFactory } from '@/presentation/components/molecules/Hero/mock'

const heroMock = heroMockFactory['default']

export const heroMapperMock: HeroRemote = {
  ...heroMock,
  title: {
    html: heroMock.title,
  },
  subtitle: heroMock.description,
  logo: {
    url: heroMock.logoUrl,
    description: heroMock.logoAlt,
  },
  backgroundDesktop: {
    url: heroMock.backgroundDesktop,
  },
  backgroundMobile: {
    url: heroMock.backgroundMobile,
  },
}
