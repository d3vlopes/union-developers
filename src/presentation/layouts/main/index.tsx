import { MainModel } from '@/domain/models'

import { Hero } from '@/presentation/components/molecules'

import { BaseLayout } from '@/presentation/layouts'

export type MainLayoutProps = MainModel

export const MainLayout = ({ base, hero }: MainLayoutProps) => {
  return (
    <BaseLayout header={base.header}>
      <Hero {...hero} />
    </BaseLayout>
  )
}
