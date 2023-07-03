import { MainModel } from '@/domain/models'

import { BaseLayout } from '@/presentation/layouts'

export type MainLayoutProps = MainModel

export const MainLayout = ({ base }: MainLayoutProps) => {
  return <BaseLayout header={base.header}>Content</BaseLayout>
}
