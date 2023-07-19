import { MainModel } from '@/domain/models'

import {
  Hero,
  TestimonialCardProps,
} from '@/presentation/components/molecules'

import { BaseLayout } from '@/presentation/layouts'

import {
  AboutSection,
  MethodologySection,
  HighlightSection,
  StepsSection,
  RememberActionSection,
  TestimonialSection,
} from './sections'

import * as S from './styles'

export type MainLayoutProps = MainModel<TestimonialCardProps>

export const MainLayout = ({
  base,
  hero,
  aboutSection,
  methodologySection,
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
        <MethodologySection {...methodologySection} />
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
      </S.Container>
    </BaseLayout>
  )
}
