import { RememberActionSection as RememberActionSectionApi } from '@/api/generated/graphql'

import { Logo } from '@/api/models'

export type RememberActionSectionRemote = Omit<
  RememberActionSectionApi,
  'id' | 'stage' | '__typename' | 'logo'
> &
  Logo
