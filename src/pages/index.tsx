import { GetStaticProps } from 'next'

import { client } from '@/libs/graphql/client/apollo'

import { MainQuery } from '@/api/generated/graphql'

import { GET_MAIN } from '@/api/queries'

import { MainLayout, MainLayoutProps } from '@/presentation/layouts'

import { mapperData } from '@/api/helpers'

export default function Index(props: MainLayoutProps) {
  return <MainLayout {...props} />
}

export const getStaticProps: GetStaticProps<
  MainLayoutProps
> = async () => {
  const { data } = await client.query<MainQuery>({
    query: GET_MAIN,
  })

  const mappedData = mapperData(data)

  return {
    props: {
      ...mappedData,
    },
  }
}
