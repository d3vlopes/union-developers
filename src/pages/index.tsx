import { GetStaticProps } from 'next'

import { client } from '@/libs/graphql/client/apollo'

import { MainQuery } from '@/api/generated/graphql'

import { GET_MAIN } from '@/api/queries'

import { mainLayoutMock } from '@/presentation/layouts/main/mocks/data'

import { MainLayout, MainLayoutProps } from '@/presentation/layouts'

import * as mappers from '@/presentation/mappers'

export default function Index(props: MainLayoutProps) {
  return <MainLayout {...props} />
}

export const getStaticProps: GetStaticProps<
  MainLayoutProps
> = async () => {
  const { data } = await client.query<MainQuery>({
    query: GET_MAIN,
  })

  const api = data.pages[0]

  return {
    props: {
      base: {
        header: mappers.HeaderMapper.toDomain(api.header),
        footer: mainLayoutMock.base.footer,
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
      testimonialSection: {
        ...mainLayoutMock.testimonialSection,
      },
      faqSection: {
        ...mainLayoutMock.faqSection,
      },
    },
  }
}
