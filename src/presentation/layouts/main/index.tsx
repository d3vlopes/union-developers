import { MainModel } from '@/domain/models'

import { Hero } from '@/presentation/components/molecules'

import { BaseLayout } from '@/presentation/layouts'

import { AboutSection, MethodologySection } from './sections'

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
        <MethodologySection
          {...about}
          heading="Metodologias"
          description="<p>Na Union combinamos o uso de 3 metodologias para você conquistar experiência, saber se posicionar profissionalmente e acelerar sua evolução!</p>"
        />
      </S.Container>
    </BaseLayout>
  )
}
