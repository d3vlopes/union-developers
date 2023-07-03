import { GetServerSideProps } from 'next'

import { headerMock } from '@/presentation/components/molecules/Header/mock'

import { MainLayout, MainLayoutProps } from '@/presentation/layouts'

export default function Index(props: MainLayoutProps) {
  return <MainLayout {...props} />
}

export const getServerSideProps: GetServerSideProps<
  MainLayoutProps
> = async () => {
  return {
    props: {
      base: {
        header: headerMock,
      },
    },
  }
}
