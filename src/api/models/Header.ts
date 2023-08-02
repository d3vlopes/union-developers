import { Header as HeaderApi } from '@/api/generated/graphql'

import { Logo, NavigationItem } from '.'

export type HeaderRemote = Pick<
  HeaderApi,
  'buttonTarget' | 'buttonText'
> &
  Logo &
  NavigationItem
