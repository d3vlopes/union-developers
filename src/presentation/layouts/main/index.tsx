import { MainModel } from '@/domain/models'

import {
  DataStructureSEO,
  alternateName,
  seoConfig,
} from '@/libs/seo'

import {
  Hero,
  AccordionProps,
  TestimonialCardProps,
} from '@/presentation/components/molecules'

import { BaseLayout } from '@/presentation/layouts'

import {
  AboutSection,
  PillarsSection,
  HighlightSection,
  StepsSection,
  RememberActionSection,
  TestimonialSection,
  SubscriptionSection,
  FaqSection,
} from './sections'

import { subscriptionMock } from './sections/Subscription/mocks/data'

import * as S from './styles'

export type MainLayoutProps = MainModel<
  TestimonialCardProps,
  AccordionProps
>

export const MainLayout = ({
  base,
  hero,
  aboutSection,
  pillarsSection,
  highlightSection,
  stepsSection,
  rememberActionSection,
  testimonialSection,
  faqSection,
}: MainLayoutProps) => {
  return (
    <BaseLayout header={base.header} footer={base.footer}>
      <Hero {...hero} />

      <DataStructureSEO
        organization={{
          logo: base.header.logoUrl,
          name: alternateName,
          url: seoConfig.canonical!,
          contactPoint: [
            {
              contactType: 'Suporte',
              email: base.footer.socialLinks[0].target,
              availableLanguage: 'Portuguese',
            },
          ],
        }}
        faq={{
          questions: faqSection.accordions,
        }}
      />

      <S.Container>
        <AboutSection {...aboutSection} />
        <PillarsSection {...pillarsSection} />
        <HighlightSection {...highlightSection} />
        <StepsSection {...stepsSection} />
      </S.Container>

      <S.RememberActionSectionWrapper>
        <S.Container>
          <RememberActionSection {...rememberActionSection} />
        </S.Container>
      </S.RememberActionSectionWrapper>

      <S.Container>
        <TestimonialSection {...testimonialSection} />
        <SubscriptionSection {...subscriptionMock} />
        <FaqSection {...faqSection} />
      </S.Container>
    </BaseLayout>
  )
}
