import {
  BenefitSection as BenefitsSectionApi,
  Highlight as HighlightApi,
  Asset,
} from '@/api/generated/graphql'

type HighlightIcon = Pick<Asset, 'url' | 'description'>

interface HighlightProps
  extends Omit<HighlightApi, 'stage' | 'icon'> {
  id: string
  title: string
  description: string
  icon: HighlightIcon
}

export type HighlightSectionRemote = Omit<
  BenefitsSectionApi,
  'id' | 'stage' | 'highlights'
> & {
  highlights: HighlightProps[]
}
