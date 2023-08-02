import { NavigationItem as NavigationItemApi } from '@/api/generated/graphql'

export interface NavigationItem {
  navigationLinks: Pick<NavigationItemApi, 'label' | 'target'>[]
}
