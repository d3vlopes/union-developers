import { MainModel } from '@/domain/models'

import { Hero } from '@/presentation/components/molecules'

import { BaseLayout } from '@/presentation/layouts'

import {
  AboutSection,
  MethodologySection,
  HighlightSection,
} from './sections'

import * as S from './styles'

export type MainLayoutProps = MainModel

export const MainLayout = ({
  base,
  hero,
  aboutSection,
  methodologySection,
  highlightSection,
}: MainLayoutProps) => {
  return (
    <BaseLayout header={base.header}>
      <Hero {...hero} />

      <S.Container>
        <AboutSection {...aboutSection} />
        <MethodologySection {...methodologySection} />

        <HighlightSection {...highlightSection} />
      </S.Container>
    </BaseLayout>
  )
}
