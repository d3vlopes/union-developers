import { RememberActionSectionRemote } from '@/api/models'
import { rememberActionMock } from '@/presentation/components/molecules/RememberAction/mock'

export const rememberActionSectionMapperMock: RememberActionSectionRemote =
  {
    ...rememberActionMock,
    logo: {
      url: rememberActionMock.logoUrl,
      description: rememberActionMock.logoAlt,
    },
  }
