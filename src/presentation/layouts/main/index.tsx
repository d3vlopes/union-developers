import { MainModel } from '@/domain/models'

import { Hero } from '@/presentation/components/molecules'

import { BaseLayout } from '@/presentation/layouts'

import { AboutSection, MethodologySection } from './sections'

import * as S from './styles'

export type MainLayoutProps = MainModel

export const MainLayout = ({
  base,
  hero,
  aboutSection,
  methodologySection,
}: MainLayoutProps) => {
  return (
    <BaseLayout header={base.header}>
      <Hero {...hero} />

      <S.Container>
        <AboutSection {...aboutSection} />
        <MethodologySection {...methodologySection} />
      </S.Container>
    </BaseLayout>
  )
}
