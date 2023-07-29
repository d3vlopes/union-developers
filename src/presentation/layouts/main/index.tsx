import { MainModel } from '@/domain/models'

import {
  Hero,
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
} from './sections'

import { subscriptionMock } from './sections/Subscription/mocks/data'

import * as S from './styles'

export type MainLayoutProps = MainModel<TestimonialCardProps>

export const MainLayout = ({
  base,
  hero,
  aboutSection,
  pillarsSection,
  highlightSection,
  stepsSection,
  rememberActionSection,
  testimonialSection,
}: MainLayoutProps) => {
  return (
    <BaseLayout header={base.header}>
      <Hero {...hero} />

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
      </S.Container>
    </BaseLayout>
  )
}
