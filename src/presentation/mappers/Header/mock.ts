import { HeaderRemote } from '@/api/models'
import { headerMock } from '@/presentation/components/molecules/Header/mock'

export const headerMapperMock: HeaderRemote = {
  ...headerMock,
  logo: {
    url: headerMock.logoUrl,
    description: headerMock.logoAlt,
  },
}
