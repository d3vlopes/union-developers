import {
  AboutSection as AboutSectionApi,
  RichText,
} from '@/api/generated/graphql'

export type AboutSectionRemote = Pick<
  AboutSectionApi,
  'sectionId' | 'heading'
> & {
  description: Pick<RichText, 'html'>
}
