import {
  PillarSection as PillarsSectionApi,
  Methodology as MethodologyApi,
} from '@/api/generated/graphql'

export type PillarsSectionRemote = Omit<
  PillarsSectionApi,
  '__typename' | 'stage' | 'id' | 'methodologys'
> & {
  methodologys: Omit<MethodologyApi, 'stage'>[]
}
