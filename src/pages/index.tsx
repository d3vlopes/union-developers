import { GetStaticProps } from 'next'

import { client } from '@/libs/graphql/client/apollo'

import { MainQuery } from '@/api/generated/graphql'

import { GET_MAIN } from '@/api/queries'

import { mainLayoutMock } from '@/presentation/layouts/main/mocks/data'

import { MainLayout, MainLayoutProps } from '@/presentation/layouts'

import {
  HeaderMapper,
  HeroMapper,
  AboutSectionMapper,
  PillarsSectionMapper,
  HighlightSectionMapper,
} from '@/presentation/mappers'

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
        header: HeaderMapper.toDomain(api.header),
        footer: mainLayoutMock.base.footer,
      },
      hero: HeroMapper.toDomain(api.hero),
      aboutSection: AboutSectionMapper.toDomain(api.aboutSection),
      pillarsSection: PillarsSectionMapper.toDomain(
        api.pillarsSection,
      ),
      highlightSection: HighlightSectionMapper.toDomain(
        api.benefitsSection,
      ),
      stepsSection: {
        ...mainLayoutMock.stepsSection,
      },
      rememberActionSection: {
        ...mainLayoutMock.rememberActionSection,
      },
      testimonialSection: {
        ...mainLayoutMock.testimonialSection,
      },
      faqSection: {
        ...mainLayoutMock.faqSection,
      },
    },
  }
}
