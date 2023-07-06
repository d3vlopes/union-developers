import { MainModel } from '@/domain/models'

import { Hero } from '@/presentation/components/molecules'

import { BaseLayout } from '@/presentation/layouts'

import { AboutSection } from './sections'

import * as S from './styles'

export type MainLayoutProps = MainModel

export const MainLayout = ({
  base,
  hero,
  about,
}: MainLayoutProps) => {
  return (
    <BaseLayout header={base.header}>
      <Hero {...hero} />

      <S.Container>
        <AboutSection {...about} />
      </S.Container>
    </BaseLayout>
  )
}
