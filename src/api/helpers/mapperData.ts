import { MainLayoutProps } from '@/presentation/layouts'

import { MainQuery } from '@/api/generated/graphql'

import * as mappers from '@/presentation/mappers'

export function mapperData(remoteData: MainQuery): MainLayoutProps {
  const api = remoteData.pages[0]

  const data: MainLayoutProps = {
    base: {
      header: mappers.HeaderMapper.toDomain(api.header),
      footer: mappers.FooterMapper.toDomain(api.footer),
    },
    hero: mappers.HeroMapper.toDomain(api.hero),
    aboutSection: mappers.AboutSectionMapper.toDomain(
      api.aboutSection,
    ),
    pillarsSection: mappers.PillarsSectionMapper.toDomain(
      api.pillarsSection,
    ),
    highlightSection: mappers.HighlightSectionMapper.toDomain(
      api.benefitsSection,
    ),
    stepsSection: mappers.StepsSectionMapper.toDomain(
      api.stepsSection,
    ),
    rememberActionSection:
      mappers.RememberActionSectionMapper.toDomain(
        api.rememberActionSection,
      ),
    testimonialSection: mappers.TestimonialSectionMapper.toDomain(
      api.testimonialSection,
    ),
    faqSection: mappers.FaqSectionMapper.toDomain(api.faqSection),
  }

  return data
}
